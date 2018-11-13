# Black Door Chat - Angular View

Where this project coming from? [Black Door Chat Project Introduction](https://github.com/cristianmercado19/black-door-chat).

## Expectation

The most simplistic and minimum UI implementation. Of course, driven by the controller... because I do not expect any complex logic in the View.

Look at the *ChatRoomComponent class* which is the implementation of *RoomView interface*.

This component represents the chat room view. As you could see, non of those methods has more than **10 lines** of code. It focuses on the **html and css** instead of the *logic* under *send* / *disconnect* / *ping* etc... For instance, when the user interacts with the UI, the ui **only** notifies to controller about this action - **nothing more**.

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

Some developers are not familiar with this kind of approach in relation with *MVC pattern*. And just ignore the flexibility and reusability gained with this pattern. They though because you are writing Java Script you are in the view layer, as a result, thousands of lines of code in a single method. I am using TypeScript as the main language to modelate the entire application.

In my bast experience, I saw many times we allocate *lot of lines of code in the view* which strictly depends on the JS framework chosen (in this particular case could be *Angular*). That means, your Model your View and your Controller depends on the framework (*Angular*). If the framework changes, chaos comes to our project... hours and hours of refactoring to make it runs again. Even a framework migration EG *Angular* to *React* is almost impossible to estimate. Because you have been married with your framework in all aspects of the *MVC*.

If you think about it, the issue is clear. You assigned a lot of responsibility to your *view* layer. You have allocated there not only the *view* but also the *Controller* (logic) and the *Model* (dtos / business classes). As a result, *lot of code lives under your Angular project* (or React or ...) **evolve or even migrate it is really hard to do or even impossible**.
I am not going to enter in onther clear issues such as **testing**, which turns really commplex, expensive and inefficient.

Just have a look the testing under the [MVC project](https://github.com/cristianmercado19/black-door-chat-mvc) take any `*.spec.ts` file, did you notice I do not need the UI implementation? I am testing the real **behavior of our UI** *not the UI itself*. Of course, if you want to test **how** the view displays the *alert message* you will add a test under your *view project (angular in my case)*. But I have just left that for other moment. Actually I do not care about the implementation of the view, I am more interesting to check behaviour. In other words, if the `view.displayMessage()` method has been *called* than *how* this message is implemented (shown to the user). Got the point?

Last but not least, some managers said: *"We need to start from the scratch because this tech is old"* - Well, I reserve my opinion about the term **"old"** due to the fact that *HTML* and *JS* are old. Isn't it?</br>
I think you are starting from scratch because of your *UI design and architecture are rot*. One effect of that, you have **no visibility** about the effort to evolve part of the architecture or migrate to an other UI framework.</br>
You are going to concentrate your effort in a *reengineering* which is really *expensive* instead of adding new features.</br>
And because you have the budget, you have a **new chance** to do that again in a **better way** - Actually this is really positive. You are a lucky guy!</br>
Let me give you and advise, if you do not want to repeat this mistake, just start with **The Reusability Principle in mind**. Otherwise ... you will repeat same story again and again and...
