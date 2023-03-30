require('dotenv').config();
const exphbs = require('express-handlebars');
const express = require('express');
const path = require('path');
const sequelize = require('./config/connection');
const router = require('./controllers');
const helpers = require('./util/helpers');
const sessionMiddleware = require('./config/session');

const PORT = process.env.PORT || 3001;
const app = express();

// setup app middleware
app.use(sessionMiddleware);
app.use(express.static(path.join(__dirname, 'public')));
app.engine('handlebars', exphbs({ helpers }));
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const categoriesRoutes = require('./routes/categoriesRoutes');
const drinksRoutes = require('./routes/drinksRoutes');
const ingredientsRoutes = require('./routes/ingredientsRoutes');
const usersRoutes = require('./routes/usersRoutes');
const favoritesRoutes = require('./routes/favoritesRoutes');

app.use('/api/categories', categoriesRoutes);
app.use('/api/drinks', drinksRoutes);
app.use('/api/ingredients', ingredientsRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/favorites', favoritesRoutes);


// connect routes
app.use(router);

// Routes
const categoriesRoutes = require('./routes/categoriesRoutes');
const drinksRoutes = require('./routes/drinksRoutes');
const ingredientsRoutes = require('./routes/ingredientsRoutes');
const usersRoutes = require('./routes/usersRoutes');
const favoritesRoutes = require('./routes/favoritesRoutes');

app.use('/api/categories', categoriesRoutes);
app.use('/api/drinks', drinksRoutes);
app.use('/api/ingredients', ingredientsRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/favorites', favoritesRoutes);


// connect db and listen
sequelize
  .sync({ force: false })
  .then(() => {
    app.listen(PORT, (err) => {
      if (err) {
        console.error(err);
        return process.exit(1);
      }
      console.log(`App listening on PORT ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
