# Responsive Web Design (RWD) Guide

## What is a Responsive Webpage?

A **responsive webpage** is a website that automatically adjusts its layout, images, text, and navigation to fit different screen sizes and devices.

Instead of creating separate websites for mobile and desktop, one responsive website works on all devices.

### Benefits
- 📱 Mobile-friendly
- 💻 Desktop compatible
- 📟 Tablet optimized
- 🔍 Better SEO
- ⚡ Better user experience
- 📈 Higher conversion rates

---

# Add This Meta Tag

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

This tells the browser to match the screen width of the device.

---

# Common Device Breakpoints

> These are the most commonly used breakpoints in modern web development.

| Device | Width |
|---------|--------|
| Extra Small Phones | 0px - 319px |
| Small Phones | 320px - 479px |
| Large Phones | 480px - 575px |
| Small Tablets | 576px - 767px |
| Tablets | 768px - 991px |
| Small Laptops | 992px - 1199px |
| Laptops/Desktop | 1200px - 1399px |
| Large Desktop | 1400px - 1599px |
| Extra Large Screens | 1600px+ |

---

# Complete Media Queries

```css
/* Extra Small Devices */
@media (max-width:319px){

}

/* Small Phones */
@media (min-width:320px) and (max-width:479px){

}

/* Large Phones */
@media (min-width:480px) and (max-width:575px){

}

/* Small Tablets */
@media (min-width:576px) and (max-width:767px){

}

/* Tablets */
@media (min-width:768px) and (max-width:991px){

}

/* Small Laptops */
@media (min-width:992px) and (max-width:1199px){

}

/* Desktop */
@media (min-width:1200px) and (max-width:1399px){

}

/* Large Desktop */
@media (min-width:1400px) and (max-width:1599px){

}

/* Extra Large Screens */
@media (min-width:1600px){

}
```

---

# Mobile First Approach (Recommended)

Start with mobile styles first.

```css
/* Mobile (Default) */

.container{
    width:100%;
}

/* Tablet */
@media (min-width:768px){

.container{
    width:750px;
}

}

/* Laptop */
@media (min-width:992px){

.container{
    width:970px;
}

}

/* Desktop */
@media (min-width:1200px){

.container{
    width:1170px;
}

}
```

---

# Desktop First Approach

```css
/* Desktop */

.container{
    width:1200px;
}

/* Laptop */
@media (max-width:1199px){

}

/* Tablet */
@media (max-width:991px){

}

/* Mobile */
@media (max-width:767px){

}
```

---

# Bootstrap Breakpoints

```css
/* Extra Small */
@media (max-width:575.98px){

}

/* Small */
@media (min-width:576px){

}

/* Medium */
@media (min-width:768px){

}

/* Large */
@media (min-width:992px){

}

/* Extra Large */
@media (min-width:1200px){

}

/* XXL */
@media (min-width:1400px){

}
```

---

# Tailwind CSS Breakpoints

| Prefix | Width |
|---------|--------|
| sm | 640px |
| md | 768px |
| lg | 1024px |
| xl | 1280px |
| 2xl | 1536px |

Equivalent CSS

```css
@media (min-width:640px){

}

@media (min-width:768px){

}

@media (min-width:1024px){

}

@media (min-width:1280px){

}

@media (min-width:1536px){

}
```

---

# Common Responsive Rules

## Images

```css
img{
    max-width:100%;
    height:auto;
}
```

---

## Videos

```css
video{
    max-width:100%;
    height:auto;
}
```

---

## Responsive Text

```css
h1{
    font-size:clamp(2rem,5vw,4rem);
}

p{
    font-size:clamp(1rem,2vw,1.2rem);
}
```

---

## Flexible Layout

```css
.container{
    display:flex;
    flex-wrap:wrap;
    gap:20px;
}
```

---

## Responsive Grid

```css
.container{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
    gap:20px;
}
```

---

## Responsive Navigation

Desktop

```css
.nav{
    display:flex;
}
```

Mobile

```css
@media (max-width:768px){

.nav{
    flex-direction:column;
}

}
```

---

# Standard Container Widths

```css
.container{
    width:100%;
    padding:0 15px;
    margin:auto;
}

@media (min-width:576px){
.container{
    max-width:540px;
}
}

@media (min-width:768px){
.container{
    max-width:720px;
}
}

@media (min-width:992px){
.container{
    max-width:960px;
}
}

@media (min-width:1200px){
.container{
    max-width:1140px;
}
}

@media (min-width:1400px){
.container{
    max-width:1320px;
}
}
```

---

# Best Practices

✅ Use Mobile First Design

✅ Use Flexbox or CSS Grid

✅ Avoid fixed widths

✅ Use `max-width:100%` for images

✅ Use relative units (`rem`, `%`, `vw`, `vh`, `em`)

✅ Use `clamp()` for responsive typography

✅ Test on multiple devices

✅ Use `flex-wrap` when using Flexbox

✅ Use `auto-fit` or `auto-fill` with CSS Grid

---

# Most Used Breakpoints (Quick Reference)

```css
/* Mobile */
@media (max-width:575px){}

/* Tablet */
@media (min-width:576px) and (max-width:767px){}

/* Large Tablet */
@media (min-width:768px) and (max-width:991px){}

/* Laptop */
@media (min-width:992px) and (max-width:1199px){}

/* Desktop */
@media (min-width:1200px) and (max-width:1399px){}

/* Large Desktop */
@media (min-width:1400px){}
```

---

# Modern Recommendation (2026)

For most projects, these five breakpoints are sufficient:

```css
/* Mobile */
@media (min-width:576px){}

/* Tablet */
@media (min-width:768px){}

/* Laptop */
@media (min-width:992px){}

/* Desktop */
@media (min-width:1200px){}

/* Large Desktop */
@media (min-width:1400px){}
```

These cover nearly all modern smartphones, tablets, laptops, desktops, and large monitors.