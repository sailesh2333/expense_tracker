import { users } from "./users";
import { currency } from "./currency";
import { accounts } from "./account";
import { categories } from "./categories";
import { transactions } from "./transaction";

//user
users.hasMany(accounts,{foreignKey:"users_id"});
users.hasMany(categories,{foreignKey:"users_id"});
users.hasMany(transactions,{foreignKey:"users_id"});

// currency
currency.hasMany(accounts,{foreignKey:"currency_id"});
currency.hasMany(transactions,{foreignKey:"currency_id"})
// accounts
accounts.hasMany(transactions,{foreignKey:"account_id"});
accounts.belongsTo(currency,{foreignKey:"currency_id"});
accounts.belongsTo(users,{foreignKey:"users_id"});
// categories
categories.hasMany(transactions,{foreignKey:"category_id"});
categories.belongsTo(users,{foreignKey:"users_id"});
// transactions
transactions.belongsTo(users,{foreignKey:"users_id"});
transactions.belongsTo(categories,{foreignKey:"category_id"});
transactions.belongsTo(accounts,{foreignKey:"account_id"});
transactions.belongsTo(currency,{foreignKey:"currency_id"})
