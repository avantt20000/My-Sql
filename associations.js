const Contact = require("./models/contacts");
const Reward = require("./models/rewards");
const ContactReward = require("./models/contactRewards");

Contact.belongsToMany(Reward, {
  through: ContactReward,
  foreignKey: "contactId",
});
Reward.belongsToMany(Contact, {
  through: ContactReward,
  foreignKey: "rewardId",
});
ContactReward.belongsTo(Reward, { foreignKey: "rewardId" });
