import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // Container
  container: {
    flex: 1,
    backgroundColor: '#EFF2F1',
    marginTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
  },

  // Header
  header: {
    paddingTop: 20,
  },
  backButton: {
    flexDirection: 'row',
    paddingBottom: 10,
  },
  backText: {
    marginLeft: 5,
    fontFamily: 'Alata-Regular',
  },

  // Item
  item: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderStyle: 'none',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  // Top Container
  topContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
  },

  // Options Reward
  optionsReward: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 80,
  },

  // Second Container
  secondContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingLeft: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'Alata-Regular',
  },

  // Text
  name: {
    fontSize: 18,
    fontFamily: 'Alata-Regular',
  },
  date: {
    // fontSize: 28,
    fontFamily: 'Alata-Regular',
  },

  // Title Score
  titleScore: {
    fontSize: 16,
    fontFamily: 'Alata-Regular',
  },

  // Add Button
  addButton: {
    borderRadius: 50,
    width: 40,
    height: 40,
    backgroundColor: '#E63E8F',
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Admin
  isAdmin: {
    width: 60,
    height: 60,
    backgroundColor: '#e63e8f',
  },

  // List Item
  listItem: {
    width: '100%',
    height: 60,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  itemText: {
    fontWeight: 'bold',
  },

  // Add Image Button
  addImageButton: {
    marginTop: 40,
    width: '100%',
    height: 45,
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: '#E63E8F',
    color: '#fff',
    borderRadius: 10,
  },

  // Edit Button
  editButton: {
    width: 60,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E63E8F',
    marginRight: -100,
  },

  // Delete Button
  deleteButton: {
    width: 60,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E63E8F',
    marginRight: 5,
  },

  // Button Text
  buttonText: {
    color: 'white',
  },

  // Resgate Button
  resgateButton: {
    backgroundColor: '#e63e8f',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },

  // Resgate Button Text
  resgateButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'Alata-Regular',
  },

  // Modal
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  buttonCloseModalLogin: {
    marginTop: 20,
    fontFamily: 'Alata-Regular',
    backgroundColor: '#E63E8F',
    width: 90,
    height: 30,
    borderRadius: '50%',
    display: 'flex',
    flexDirection: 'row',
   justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTextCloseModalLogin: {
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default styles;