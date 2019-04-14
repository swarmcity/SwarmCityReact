import Welcome from "./welcome/WelcomeRoot";
import CreateAccountRoot from "./create-account/CreateAccountRoot";
import HashtagRoot from "./hashtag/HashtagRoot";
import HashtagListRoot from "./hashtag-list/HashtagListRoot";
import ItemDetailRoot from "./item-detail/ItemDetailRoot";
import NewItemRoot from "./new-item/NewItemRoot";
import MyProfileRoot from "./my-profile/MyProfileRoot";
import MyWalletRoot from "./my-wallet/MyWalletRoot";

export default [
  { path: "/", exact: true, component: Welcome },
  { path: "/create-account", component: CreateAccountRoot },
  { path: "/hashtag/:hashtagAddress", component: HashtagRoot },
  { path: "/hashtag-list", component: HashtagListRoot },
  { path: "/item-detail/:hashtagAddress/:itemId", component: ItemDetailRoot },
  { path: "/new-item", component: NewItemRoot },
  { path: "/my-profile", component: MyProfileRoot },
  { path: "/my-wallet", component: MyWalletRoot }
];
