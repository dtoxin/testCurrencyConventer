var HistoryItems = React.createClass({
	displayName: 'HistoryItem',

	render: function() {
		var history = this.props.history;

		var historyItems = history.map(function(item, index, arr){

			return React.DOM.li({className: 'history-item'}, item.sum + ' ' + item.from + ' To ' + item.to + ' = ' + item.result);
		});

		return React.DOM.ul({className: 'history-list'}, historyItems);
	}
});