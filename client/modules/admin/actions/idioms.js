export default {
  create({ Meteor, LocalState, Collections }, idiom) {
    Meteor.call('idioms.create', idiom, (error) => {
      if (error) {
        return LocalState.set('status', 'Something went badly wrong');
      }

      LocalState.set('status', 'That is done. Lovely stuff');
    });
  },
};
