# What is HTML?

## Definition

1. HTML stands for **HyperText Markup Language**.
2. HTML was first introduced by **Tim Berners-Lee** in **1989**.
3. HTML file extensions are:
   - `.html`
   - `.htm`
4. HTML is used to create web pages and websites.
5. HTML is a **case-insensitive** markup language.

   **Examples:**

   ```html
   <html>
   <HTML>
   <Html>
   ```

6. HTML can be integrated with many programming languages to create dynamic web applications.

   **Examples:**
   - PHP + HTML
   - Node.js + HTML
   - Python + HTML
   - ASP.NET + HTML

7. The term **HyperText** means linking one page to another page.

   **Example:**

   ```html
   <a href="https://www.tops-int.com">www.tops-int.com</a>
   ```

8. HTML is used to create:
   - Home Pages
   - Web Pages
   - Static Websites

---

# HTML Basic Structure (Skeleton / Boilerplate)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>

    <!-- External CSS -->
    <link rel="stylesheet" href="main.css">

    <!-- Internal CSS -->
    <style type="text/css">

    </style>

    <!-- JavaScript -->
    <script type="text/javascript">

    </script>

    <!-- No Script -->
    <noscript>
        JavaScript is disabled in your browser.
    </noscript>
</head>

<body>
    <h1>Get in Touch With Us!</h1>
</body>
</html>
```

---

# Explanation of HTML Structure

| Tag | Description |
|-------|-------------|
| `<!DOCTYPE html>` | Declares HTML5 document type |
| `<html>` | Root element of the HTML page |
| `<head>` | Contains metadata and page information |
| `<meta>` | Provides information about the webpage |
| `<title>` | Sets the webpage title will provide not more than 75+ character |
| `<link>` | Links external CSS files |
| `<style>` | Adds internal CSS |
| `<script>` | Adds JavaScript code |
| `<noscript>` | Displays content when JavaScript is disabled |
| `<body>` | Contains visible webpage content |
| `<h1>` | Main heading of the webpage |

---

# Example Output

```html
<!DOCTYPE html>
<html>
<head>
    <title>My First Webpage</title>
</head>
<body>
    <h1>Welcome to HTML</h1>
    <p>This is my first webpage.</p>
</body>
</html>
```

### Browser Output

```text
Welcome to HTML
This is my first webpage.
```

---

# Key Features of HTML

- Easy to Learn
- Platform Independent
- Case Insensitive
- Supports Hyperlinks
- Supports Multimedia
- Forms Creation
- SEO Friendly
- Supported by All Modern Browsers

---

# Summary

HTML is the standard markup language used to create web pages. It provides the basic structure of websites using tags and can be combined with CSS, JavaScript, PHP, Python, Node.js, and many other technologies to build modern web applications.



# html tags or html element

1. html tags provides structure 
2. html tags or element  define inside of <> angular bracket
3. html tags are 2 types 

   1. paired tag
      **def**
       1. tags are paired meanse start and need to closed 

      **examples**        
       ```
        <p>paragraph</p>
        
        <h1>paragraph</p>
        
        <marquee>paragraph</marquee>
        
        <span>paragraph</span>
       ```
   2. non-paired tag

      **def**
       1. tags are non paired meanse start and not need to closed 

      **examples**        
       ```
        <br>
        <hr>
        <p>
        <input>
        <meta>
        <link>
        <img>
       ```
