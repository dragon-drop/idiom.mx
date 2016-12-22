export default {
  upvote({ Meteor, FlowRouter, LocalState }) {
    const idiotId = FlowRouter.getParam('idiotId');
    console.log('upvote action', idiotId);
    Meteor.call('idiots.upvote', idiotId, (error) => {
      // LocalState.set('upvoted', true);
    });
  }
}
