import React,{Component} from "react";
 import { Card } from 'react-native-elements';
 import { Text, View, scrollView } from "react-native";

  class Contact extends Component{
          constructor(props) {
          super(props);

         this.state={ 

         };
      }

    //   static navigationOptions = {
    //       title: "Contact Us",
    //   };

      render(){
         return(
             <Card title="Contact Information">
            <View>
                <Text>
                <Text>121, Clear Water Bay Road</Text>{"\n"}
                <Text>Clear Water Bay, Kowloon</Text>{"\n"}
                 <Text>HONG KONG</Text>{"\n"}
                <Text>el: +852 1234 5678</Text>{"\n"}
                <Text>Fax: +852 8765 4321</Text>{"\n"}
                <Text>Email:confusion@food.net</Text>
                </Text>
            </View>
            </Card>
        );
     }
 }

 export default Contact;