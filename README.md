# Black Door Chat - Angular View

Where this project coming from? [Black Door Chat Project Introduction](https://github.com/cristianmercado19/black-door-chat).

## Expectation

The most simplistic and minimum UI implementation. Of course, driven by the controller... because I do not expect logic under the View.

Look at the *ChatRoomComponent class* which is the implementation of *RoomView interface*.

This component represents the chat room view. As you could see, non of those methods has more than **10 lines** of code. It focuses on the **html and css** instead of the *logic* of the send / disconnect / messaging action... When the user interacts with the UI, for instance when require send a message , the ui **only** notifies to controller about this action.

```js
  onSendMessage(): void {
    this.controller.sendMessage();
  }
```

And leaves all the responsibility to be **managed by the controller**.

## Commands

1. Install dependencies `yarn install`
2. Run the server `yarn start`

## Personal reflection

Some developers are not familiar with this kind of approach in relation with MVC pattern. And just ignore the flexibility and reusability gained with this pattern.

In my bast experience, I saw many times we allocate *lot of lines of code in the view* which strictly depends on the JS framework chosen (in this particular example Angular). And because the dependency is not well managed, as soon this framework change, chaos comes to our project... hours and hours of refactoring to make it runs again. Even a framework migration EG Angular to React is almost impossible to estimate.

If you think about it, the issue is clear. You assigned a lot of responsibility to your view, and *lot of code lives under your Angular project* (or React or ...) **evolve or even migrate it is really hard to do or even impossible**.
I am not going to enter deeply in the issues related to testing, which are massive.

Just have a look the testing under the [MVC project](https://github.com/cristianmercado19/black-door-chat-mvc) any `*.spec.ts`, did you notice I do not need the UI implementation? I am testing the real **behavior of our UI** *not the UI itself*. Of course, if you want to test **how** the view displays the alert message you will add a test under your view project (angular view in my case) which finally implements the interfaces. But I have just left that for other moment. Actually I do not care, I am more interesting to check if the `view.displayMessage()` method has been called than how this message is shown to the user. Got the point?

Last but not least, some managers said: *"We need to start from the scratch because this tech is old"* - Well, I reserve my opinion about the term **"old"** due to the fact that HTML and JS are old. Isn't it?</br>
I think you are starting from scratch because of your *UI design and architecture are rot*. One effect of that, you have **no visibility** about the effort to evolve part of the architecture.</br>
You concentrate your effort in a *reengineering* which is really expensive instead of in new features.</br>
Because you have the budget, you have a new chance to do that again in a better way - this is really positive. You are a lucky guy!</br>
Let me give you and advise, If you do not want to repeat this issue again, just start with **The Reusability Principle in mind**. Otherwise ... you will repeat same story again and again.
