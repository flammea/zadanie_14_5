var Contacts = React.createClass({
  propTypes: {
    items: React.PropTypes.array.isRequired,
  },

  render: function() {
    var contacts = this.props.items.map(function(contact) {
        return React.createElement(Contact, {item: contact, key: contact.id});
    });

    return (
      React.createElement('div', {},
        React.createElement('h1', {}, "Lista kontaktów"),
        React.createElement('ul', {className: 'contactsList'}, contacts)
    )
  )
}
});


