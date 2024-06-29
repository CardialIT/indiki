
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AF4F6F5',
    marginTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
  },
  header: {
    paddingTop: 20,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backText: {
    marginLeft: 8,
    fontFamily: 'Alata-Regular'
  },
  title: {
    fontSize: 28,
    paddingTop:10,
    fontWeight: 'bold',
    fontFamily: 'Alata-Regular'
  },
  pageTitle:{
    fontSize: 28,
    paddingTop:10,
    fontWeight: 'bold',
    fontFamily: 'Alata-Regular'
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 8,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 30,
  },
  sectionContainer: {
    marginTop: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  item: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    marginHorizontal: 16,
    borderColor: '#FFFFFF',
    firstItem: {
      borderTopWidth: 0, // Remova a borda superior do primeiro item
      marginTop: 0, // Remova a margem superior do primeiro item
    }
  },
  title: {
    fontSize: 24,
    marginBottom: 4,
    fontFamily: 'Alata-Regular',
  },
  date: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 4,
    fontFamily: 'Alata-Regular',
  },
  status: {
    fontSize: 16,
    fontFamily: 'Alata-Regular',
  },
});
