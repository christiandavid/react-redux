import { connect } from "react-redux";
import { removeText } from "../actions";
import TextLists from "../components/TextLists";

const mapStateToProps = state => ({
  id: state.id,
  text: state.text
});

const mapDispatchToProps = {
  onRemoveClick: removeText
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TextLists);
