const Sequelize = require('sequelize');

const db = new Sequelize('mathongo', 'muser', 'mpass', {
    host: 'localhost',
    dialect: 'postgres'
});

const Student = db.define('student', {
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    class: Sequelize.INTEGER,
    contact: Sequelize.BIGINT,
});

const Tutor = db.define('tutor', {
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    img: Sequelize.STRING(1234),
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    description: Sequelize.STRING(1234)
});

const MiniCourse = db.define('minicourse', {
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    name: Sequelize.STRING,
    noOfLessons: Sequelize.STRING,
    password: Sequelize.STRING,             //why so?
    description: Sequelize.STRING,
    level: Sequelize.STRING
});

const Lesson = db.define('lesson', {
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    name: Sequelize.STRING,
    videourl: Sequelize.STRING(1234),
    level: Sequelize.STRING,
});

const Bookmark = db.define('bookmark', {
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
});

const Enrollment = db.define('enrollment', {
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
});

const Report = db.define('report', {
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    description: Sequelize.STRING(1234),
});

const Follow = db.define('follow', {
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
});

const Upvote = db.define('upvote', {
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
});

const Review = db.define('review', {
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    rating: Sequelize.INTEGER,      //discuss
    description: Sequelize.STRING
});

const Class = db.define('class', {
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    className: Sequelize.STRING,
});

const Subject = db.define('subject', {
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    subjectName: Sequelize.STRING,
});

const Category = db.define('category', {
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    categoryName: Sequelize.STRING,
});

const Course = db.define('course', {
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    courseName: Sequelize.STRING,
});

const Tag = db.define('tag', {
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
});


MiniCourse.belongsTo(Tutor);
Tutor.hasMany(MiniCourse);

Lesson.belongsTo(MiniCourse);
MiniCourse.hasMany(Lesson);

Bookmark.belongsTo(Student);
Bookmark.belongsTo(Lesson);
Student.hasMany(Bookmark);
Lesson.hasMany(Bookmark);

Enrollment.belongsTo(Student);
Enrollment.belongsTo(MiniCourse);
Student.hasMany(Enrollment);
MiniCourse.hasMany(Enrollment);

Report.belongsTo(Student);
Report.belongsTo(Lesson);
Student.hasMany(Report);
Lesson.hasMany(Report);

Follow.belongsTo(Student);
Follow.belongsTo(Tutor);
Student.hasMany(Follow);
Tutor.hasMany(Follow);

Upvote.belongsTo(Student);
Upvote.belongsTo(Lesson);
Student.hasMany(Upvote);
Lesson.hasMany(Upvote);

Review.belongsTo(Student);
Review.belongsTo(MiniCourse);
Student.hasMany(Review);
MiniCourse.hasMany(Review);

Tag.belongsTo(Class);
Tag.belongsTo(Subject);
Tag.belongsTo(Category);
Tag.belongsTo(Course);
Tag.belongsTo(MiniCourse);
Class.hasMany(Tag);
Subject.hasMany(Tag);
Category.hasMany(Tag);
Course.hasMany(Tag);
MiniCourse.hasMany(Tag);


db.sync({}).then(() => {
    console.log('Database configured')
});

module.exports = {
    models: {
        Student,
        Tutor,
        MiniCourse,
        Lesson,
        Bookmark,
        Enrollment,
        Report,
        Follow,
        Upvote,
        Review,
        Class,
        Subject,
        Category,
        Course,
        Tag
    }
};