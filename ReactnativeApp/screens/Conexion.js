import React from 'react';
import {StyleSheet, Text, View, setState, FlatList } from 'react-native';


export default class App extends React.Component{
  
  constructor(props){
    super(props);  
    this.state = {
      loading: false,
      superheroe: [],
      url: 'http://192.168.0.7:8000/heroes/?format=json'
    }
  }

  componentDidMount(){
    this.getHeroe();
  }

  getHeroe = () => {

    this.setState({loading:true})
    
    fetch(this.state.url)
    .then(res => res.json())
    .then(res=>{
      this.setState({
        superheroe: res,
        loading: false
      });
    });
  };
//   async function getHero(){
//     const url =  "http://192.168.0.7:8000/heroes/?format=json";
//     try{
//     const response = await fetch(url)
//     const data = await response.json()
//     console.log(data[0].name)
//     const firstelement = data[0]
//     console.log('El primer elemento es: ', firstelement)
//     }catch(error){
//         console.log(error.message)
//     }
// }

// getHero();

//////////////////////////////////////////////
// const [isLoading, setLoading] = useState(true);
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch('http://192.168.0.7:8000/heroes/?format=json')
//       .then((response) => response.json())
//       .then((json) => setData(json.array))
//       .catch((error) => console.error(error))
//       .finally(() => setLoading(false));
//   });

render(){
  if(this.state.loading){
  return (
    <View style={styles.container}>
        <Text>Descargando Super Heroe</Text>
   </View>
  );
  }
    return (
      <View style={{flex:1, paddingTop:60,paddingLeft:55}}>
        <Text>Los datos obtenidos del servidor son:</Text>
         <FlatList style={{paddingTop:25}}
          data = {this.state.superheroe}
          renderItem={
          ({item}) => <Text>{item.name}</Text>
            }
            keyExtractor={(item, index)=> index.toString()}
         />
    </View>
    );
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
