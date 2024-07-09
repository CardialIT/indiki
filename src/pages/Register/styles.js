import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 90,
    paddingHorizontal: 10,
  },
  titleRegisterLabel:{

    fontSize: 30,
    color: "black",
    marginBottom: 5,
  },

  label: {

    fontSize: 16,
    marginBottom: 5,
    alignSelf: "flex-start",
    color: "black",
  },

  input: {
    width: "100%",
    height: 45,
    borderColor: "gray",
    borderWidth: 2,
    marginBottom: 5,
    paddingHorizontal: 10,
    borderRadius: 8,
  },

  inputRegister: {
    width: "100%",
    fontSize: 16,

    marginBottom: 5,
    color: "#A7A6A5",
    width: "100%",
  },
  buttonRegister: {
    width: "90%",
    backgroundColor: "#E63E8F",
    borderRadius: 20,
 
    height: 70,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  buttonRegisterText: {
    color: "#F4F6F5",

    fontSize: 16,
    borderRadius: 16,
    marginBottom: 0,
  },
  listFormRegister: {
    width: "100%",
  },
  signupContainer: {
    marginTop: 0,
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 3,
    marginVertical: 20,
  },
  signupRegisterText: {
    fontSize: 16,
    color: "#A7A6A5",

  },
  signupLinkRegisterText: {
    color: "#E63E8F",
    textDecorationLine: "underline",
    marginLeft: 5,

  },
  errorMessage: {
    color: "red",
    fontSize: 14,
  },
  errorInput: {
    borderColor: "red", 
  },
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
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: "#E63E8F",
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',


  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',

  },
  checkLayout:{
    display: 'flex',
    flexDirection: 'row'
  }

  
});
