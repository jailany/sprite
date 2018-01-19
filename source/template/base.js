export default (body) => {
    return `
    <!DOCTYPE html>
    <html xmlns="http://www.w3.org/1999/xhtml" lang="en" dir="ltr">
        <head>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <title>The Home Page</title>
            <link rel="stylesheet" href="app.bundle.css" />
            <link href="https://fonts.googleapis.com/css?family=Actor" rel="stylesheet">
        </head>
        <body>
            <div id="root">${body}</div>
            <script src="bundle.js"></script>
        </body>
    </html>
    `;
}
