import { StatusBar } from 'expo-status-bar';
import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [getter,setGetter]=useState({});
  const tryApiCaller=value=>{
    return fetch(`http://localhost:3031/api/signup`,{
        method:"POST",
        headers:{
          Accept:"application/json",
          "Content-Type":"application/json"
        },
        body: value
    }
    )
    .then(response=>{ return response.json()})
    .catch(err=>console.log(err))
  };
  useEffect(() => {
    tryApiCaller(`{"name":"kavin","phone":88723453,"email":"k233@gmail.com","password":"kavin@007"}`).then((res)=>{
      setGetter(res)
    })
  }, [])
  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(getter)}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
