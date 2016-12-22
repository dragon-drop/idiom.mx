export default {
  create({ Meteor, FlowRouter, Collections }, idiom) {
    Meteor.call('idioms.create', idiom, (error) => {
      if (error) {
        return console.error(error);
      }

      FlowRouter.go('/done');
    });
  },
};
