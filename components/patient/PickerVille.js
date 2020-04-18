import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import RNPicker from "rn-modal-picker";

export default class PickerVille extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [
        {
          id: 1,
          name: "ولاية أريانة",
          value:"ARIANA"
        },
        {
          id: 2,
          name: "ولاية باجة",
          value:"BEJA"
        },
        {
          id: 3,
          name: "ولاية بن عروس",
          value:"BENAROURS"
        },
        {
          id: 4,
          name: "ولاية بنزرت",
          value:"BIZERTE"
        },
        {
          id: 5,
          name: "ولاية تطاوين",
          value:"TATOUINE"
        },
        {
          id: 6,
          name: "ولاية توزر",
          value:"TOUZUER"
        },
        {
          id: 7,
          name: "ولاية تونس",
          value:"TUNIS"
        },
        {
          id: 8,
          name: "ولاية جندوبة",
          value:"JANDOUBA"
        },
        {
          id: 9,
          name: "ولاية زغوان",
          value:"ZAGHOUIN"
        },
        {
          id: 10,
          name: "ولاية سليانة",
          value:"SILIANA"
        },
        {
          id: 11,
          name: "ولاية سوسة",
          value:"SOUSSE"
        },
        {
          id: 12,
          name: "ولاية سيدي بوزيد",
          value:"SIDIBOUZID"
        },
        {
            id: 13,
            name: "ولاية صفاقس",
            value:"SFAX"
          },
          {
            id: 14,
            name: "ولاية قابس",
            value:"GABES"

          },
          {
            id: 15,
            name: "ولاية قبلي",
            value:"KBELLI"
          },
          {
            id: 16,
            name: "ولاية القصرين",
            value:"GASSERINE"
          },
          {
            id: 17,
            name: "ولاية قفصة",
            value:"GAFSA"
          },
          {
            id: 18,
            name: "ولاية القيروان",
            value:"KAIROIN"
          },
          {
            id: 19,
            name: "ولاية الكاف",
            value:"ELKEF"
          },
          {
            id: 20,
            name: "ولاية مدنين",
            value:"MEDINE"
          },
          {
            id: 21,
            name: "ولاية المنستير",
            value:"MONASTIR"
          },
          {
            id: 22,
            name: "ولاية منوبة",
            value:"MANNOUBA"
          },
          {
            id: 23,
            name: "ولاية المهدية",
            value:"MAHDIA"
          },
          {
            id: 24,
            name: "ولاية نابل",
            value:"NABEUL"
          }
      ],
      placeHolderText: "قم بإختيارالولاية",
      selectedText: "",
      selectedValueville: ""
    };
  }
  _selectedValue(index, item) {
    this.setState({ selectedText: item.name ,selectedValueville:item.value});
  }

  render() {
    return (
      <View style={Styles.container}>
        <Text style={{ marginBottom: 25, fontSize: 18, fontWeight: "bold" }}>
          {"الولاية"}
        </Text>
        <RNPicker
          dataSource={this.state.dataSource}
          dummyDataSource={this.state.dataSource}
          defaultValue={false}
          pickerTitle={"الولايات"}
          showSearchBar={true}
          disablePicker={false}
          changeAnimation={"none"}
          searchBarPlaceHolder={"بحث....."}
          showPickerTitle={true}
          searchBarContainerStyle={this.props.searchBarContainerStyle}
          pickerStyle={Styles.pickerStyle}
          itemSeparatorStyle={Styles.itemSeparatorStyle}
          pickerItemTextStyle={Styles.listTextViewStyle}
          //selectedLabel={this.state.selectedText}
          placeHolderLabel={this.state.placeHolderText}
          selectLabelTextStyle={Styles.selectLabelTextStyle}
          placeHolderTextStyle={Styles.placeHolderTextStyle}
          dropDownImageStyle={Styles.dropDownImageStyle}
          //dropDownImage={require("./res/ic_drop_down.png")}
         // selectedValue={(index, item) => this._selectedValue(index, item)}
        />
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  itemSeparatorStyle:{
    height: 1,
    width: "90%",
    alignSelf: "center",
    backgroundColor: "#D3D3D3"
  },
  searchBarContainerStyle: {
    marginBottom: 10,
    flexDirection: "row",
    height: 40,
    shadowOpacity: 1.0,
    shadowRadius: 5,
    shadowOffset: {
      width: 1,
      height: 1
    },
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "#d3d3d3",
    borderRadius: 10,
    elevation: 3,
    marginLeft: 10,
    marginRight: 10
  },

  selectLabelTextStyle: {
    color: "#000",
    textAlign: "right",
    width: "99%",
    padding: 10,
    flexDirection: "row",
    fontSize: 18, fontWeight: "bold"
  },
  placeHolderTextStyle: {
    color: "#D3D3D3",
    padding: 10,
    textAlign: "right",
    width: "99%",
    flexDirection: "row",
    fontSize: 18, fontWeight: "bold"
  },
  dropDownImageStyle: {
    marginLeft: 10,
    width: 10,
    height: 10,
    alignSelf: "center"
  },
  listTextViewStyle: {
    color: "#000",
    marginVertical: 10,
    flex: 0.9,
    marginLeft: 20,
    marginHorizontal: 10,
    textAlign: "right",
    fontSize: 18, fontWeight: "bold"
  },
  pickerStyle: {
    marginLeft: 18,
    elevation:3,
    paddingRight: 25, 
    marginRight: 10,
    marginBottom: 2,
    shadowOpacity: 1.0,
    shadowOffset: {
      width: 1,
      height: 1
    },
    borderWidth:1,
    shadowRadius: 10,
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "#d3d3d3",
    borderRadius: 5,
    flexDirection: "row"
  }
});