# **TikTok Clone**
## Overview
Tiktok clone is a clone of Tiktok of course that I built as my first project in the MERN stack and my main objective was to understand how to build the frontend of an app and its backend as well as integrate them and finally host the app to allow people to access it from everywhere on earth.
## Tools I used and Why I used them
While building this clone I took advantage of many frameworks available and tools to ease the development of my application. These include:

## Frontend
### 1.React
One of the best frontend libraries that has existed, React is a library that helps you structure the development of your app in a very good way while providing functions that help you tackle every aspect and feature on your development list. React helped me avoid repeating myself with its great feature which is **components** and it also allowed me to handle changes reactively using its **Hooks** and over that I was able to easily handle routes and route parameters using **react-router** and I can't stress enough how much this played a key role in keeping me motivated to develop the app.
#### React features that I used
 - **Components** : Reacts has this components feature as one of its core features that also helped it rise to popularity, and in my case it helped me build re-usable components that I was able to use multiple times all around the project while I only took time to write them only once.
 - **React-router** : React router helped me handle routes and some parameters in routes that all help to allow the dynamics of the app and also allow pass data from page to page.
 - **React Hooks** : I think without hooks like useState , useEffect and others I would have had a hard time building this app but with hooks I could easily manage the state, handle side effects and also improve the dynamics of my application.
>>There are many React features that I used that also makes it one of the best Fronted libraries in the world only that space and time couldn't not allow me to mention
### 2.Create-react-app
It is a development environment that use  Webpack as its build tool and it allows developers to focus more on their code than waste time in configuration and it also helps them build their apps and make them deployment-ready in a matter of seconds. But there are something I didn't like about using create-react-app and Webpack as a whole.

 #### Why I didn't like using create-react-app

- Create-react-app always took time while starting my app and this could sometimes lead to me being distracted by other things during that moment.
- Create-react-app also took much more time to load the changes I had made in my code during development.
> **Note** : I'm saying it took much time because I now know a tool called ** Vite ** which starts my app in a matter of seconds and load the changes I make in a matter of milliseconds now.
### 3.Tailwind CSS
I always had a stereotype about this tool until I started using it. Before I thought it was very complicated until I realised it was the easiest CSS Utility framework that existed by that time

 #### Why I liked using Tailwind CSS:
- Contrary to **Bootstrap** and other CSS framework utilities, Tailwind gave me all the flexibility I have ever wanted during development there were no hardcoded blocks of login forms or inputs, but had a long list of classes that I could use and modify according to my needs and it really boosted my motivation working with CSS the first time I used it.
- ** Its learning curve ** :To learn Tailwind CSS took me not more than an hour , and although I can't say now that I know everything about it but I know everything I need to deliver and build amazing projects for me and the world.

### 4.Material UI
MUI is a component library that has a large set of styled components that you can integrate in your app instead of building them from scratch.

 #### Why I used MUI
- I didn't want to write some components from scratch like some special elements like select boxes and others so MUI provided the elements with the right event handlers and styles that really saved me time and frustration during development of course.

### 5.Axios
Mine is a social app and it is well understandable that I needed to make several http requests and Axios did a good job helping me with that!

 #### Why I used axios
- It is simple and doesn't need configuration.
- It is asynchronous which allowed me to implement the non-blocking style of programming.
- It's learning curve, it is easy to learn basically you are able to use it at the first glance or touch I can say.


## Backend
The backend of this app wasn't as complicated as the frontend since the frontend usually always require the most amount of effort and time compared to the backend but it also came with its challenges. Here are the tools I used to build the backend of the app.

### 1.Express JS
Express JS is a NodeJS framework that helps in building RESTful APIs with little code possible and together with many other libraries I used I was able to build a full functioning backend for my app.

#### Feautures of Express JS I used
- **Routes handling** : I used the express router to handle routes in my app and respond to different endpoints in unique ways.
- **Middleware** :  Middlewares are a great way to intercept request before they get to the endpoint handler and modify it or check to increase security and flexibility and I used middlewares to implement authorization basically.

### 2.MongoDB
MongoDB is the database I used which uses document based storage and I used it to store users, posts and other useful information in the application not forgetting to mention to implement the realations between this stored data.
> Last but not least I used the **MVC** architecture where I had the model(Database) , View(well the frontend) and the Controllers which handled my backend requests.

### 3.JWT
I used **JWT** in authentication and authorization and it helped me build a user management system where a user could register and login to be allowed to do things like liking, commenting and uploading content on the platform.

### 4.Cloudinary
**Cloudinary** is a cloud storage service which helps you to store your website's assets and user content at a cheap and sometimes free cost. I used cloudinary to store profile pictures and user uploaded videos.

## Most challenging features to implement

1.**Authentication&Authorization** : Authentication along with authorization are one of the most challenging features that I had to implement since it requires thinking of every possible way to keep your app secure and not allowing unauthorized access to certain resources. And it also involves working with tokens which is not also something easy to do.
<br />

2. **Liking** : Implementing the liking feature was so frustrating since every algorithm I tried introduced a bug to a point I felt like giving up. But I eventually figured out a way to allow a user to like and change the appearance of the button if the current user likes the video and persist that even when he closes the app and comes back or does a page reload.<br />
3. **Input Validation** : Validating user input is something vital in every application and I used the Joi library to validate user input but then it was a very daunting task since user are always unpredictable and you need to think of any possible input and validate each of them. And with this comes error handling in validation, registration and login.
