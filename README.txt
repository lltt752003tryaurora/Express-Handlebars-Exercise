npm i -s express express-handlebars 

pnpm i -s express express-handlebars // store better in CD

nodemon index.js (auto init server)\

process.env.PORTư

html => express-handlebars template

+/ Task1:
- phương thức get(lấy theo query string) => dùng req.query
- phương thức post(kolấy theo query string) => dùng req.body
    + ở đây phải có thao tác parse dữ liệu trong body sang json thì mới truy xuất được: 
        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));

+/ Task2, task3:
- duyệt theo danh sách. Những gì lặp lại thì thay thế bằng tham số dữ liệu