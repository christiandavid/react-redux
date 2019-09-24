import { connect } from 'react-redux';
import TextLists from '../components/TextLists';

const mapStateToProps = (state) => ({
  text: state.text,
});

export default connect(
  mapStateToProps,
)(TextLists);
