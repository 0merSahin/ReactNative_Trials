import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import BooksScreen from "./src/screens/BooksScreen";
import BookDetailScreen from "./src/screens/BookDetailScreen";


const navigator = createStackNavigator (
    {
        Books: BooksScreen,
        BookDetail: BookDetailScreen
        // YAPI: Kullanacağımız ifade - import edilen dosya
        // Yukarıdaki ifadeleri biz belirledik. comp'larda vb. İstediğimizi yazabiliriz.
    },
    {
        initialRouteName: "Books", // Burada hangi "key"i yazarsak (yukarıdakilerden) bize o ekranı gösterir.
        defaultNavigationOptions: {
            title: "Books"
        }
    },
);

export default createAppContainer (navigator);