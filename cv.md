# Ivanik Ilia

<img src="img/avatar.jpg" alt="avatar" width="210" style="margin-bottom: 20px;"/>

## Contacts
telegram: **@Elijah_I**
<br />
Email: **elferno@inbox.ru**
<br />
Phone: **+7 922 021 08 05**
<br />
Discord: **Elijah-I (@Elijah-I)**

## About me
I've been programming since I was 18. Have a wide expirience in PHP, JS, HTML, CSS, MySQL. Been working a lot so usually had no time for education. Today my main goal is to catch up modern technology stack and approach to programming. Looking forward for: React + Redux, SCSS, GIT, patterns, REST API, maybe some server side stuff too.

## Stack
* PHP
* JS
* HTML
* CSS
* MySQL

## Code samples

```javascript
const deepCopy = obj => {
  const copy = Object.assign({}, obj)
  Object.keys(copy).forEach(key => {
    if (null !== copy[key] && typeof copy[key] === "object")
      copy[key] = deepCopy(copy[key])
  })
  return copy
}
```

```javascript
Function.prototype.myBind = function (context) {
  context.fn = this
  return (...args) => context.fn(...args)
}
```

## Projects
[github pages CV](https://elijah-i.github.io/rsschool-cv/cv)

## Work expirience
15 years of non-commercial programming. Selft educated. unfortunately none of my projects are available atm since they all were deployed on complicated clusters and once they turned down (_when our investor got broke_) all my work gone.

## Education
secondary education

## English level
Feel pretty confident. Never pass any test or something so have no idea about official level or whatever... Selft educated.