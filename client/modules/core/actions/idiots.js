export default {
  upvote({ Meteor, FlowRouter, LocalState }) {
    const idiotId = FlowRouter.getParam('idiotId');
    console.log('upvote action', idiotId);
    console.log(window.localStorage);
    Meteor.call('idiots.upvote', idiotId, (error) => {
      let idiomLocal = window.localStorage.getItem('idiom.mx') || '{}';

      idiomLocal = JSON.parse(idiomLocal);

      if (!idiomLocal.upvoted) {
        idiomLocal.upvoted = [];
      }

      idiomLocal.upvoted.push(idiotId);

      window.localStorage.setItem('idiom.mx', JSON.stringify(idiomLocal));
    });
  }
}
