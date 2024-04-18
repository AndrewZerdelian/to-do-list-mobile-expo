import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
export default function ToDoScreen() {
  const [todos, setTodos] = useState(""); // use state for the TextInput Values and onChangeText={(value) => setTodos(value)}
  const [todolist, settodolist] = useState([]); // todolist is the rendered items  // settodolist spread the old array and adds the id with date and title from todos with is the value from textinput bar
  const [EditTodo, setEditTodo] = useState(null);
  function HandleAddToDo() {
    //<== on Press
    if (todos === "") {
      alert("you need to write something first");
    } else {
      settodolist([...todolist, { id: Date.now().toString(), title: todos }]);
      setTodos("");
    }
  }

  function handleDeleteTodo(id) {
    settodolist(todolist.filter((item) => item.id !== id)); /// filter out the item with matching id
  }

  function handleEditTodo(todos) {
    setEditTodo(todos);
    setTodos(todos.title);
  }

  function HandleUpdate() {
    const updatedtodos = todolist.map((item) => {
      if (item.id === EditTodo.id) {
        return { ...item, title: todos };
      }
      return item;
    });
    settodolist(updatedtodos);
    setEditTodo(null);
    setTodos("");
  }

  return (
    <SafeAreaView>
      {todolist.length ? (
        <View>
          <View className="p-5">
            <View className="flex flex-row justify-between items-center">
              <TextInput
                className="bg-slate-400 rounded-lg p-2 w-72"
                value={todos}
                placeholder="Add a new items"
                placeholderTextColor="white"
                onChangeText={(value) => setTodos(value)}
              />
              {EditTodo ? (
                <TouchableOpacity
                  className="bg-[#EC6E4C] rounded-xl"
                  onPress={HandleUpdate}
                >
                  <Text className="text-white font-bold text-center px-5 py-3">
                    Save
                  </Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  className="bg-[#EC6E4C] rounded-xl"
                  onPress={HandleAddToDo}
                >
                  <Text className="text-white font-bold text-center px-5 py-3">
                    +
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
          <FlatList
            data={todolist}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <View className="flex flex-row justify-start items-center p-3 ">
                <Text key={index.id}></Text>

                <View className="bg-orange-400 w-full rounded-3xl p-5 flex flex-row justify-between ">
                  <MaterialIcons name="done" size={24} color="black" />
                  <Text className="text-white font-extrabold text-xl">
                    {item.title}
                  </Text>
                  <View className="flex flex-row gap-3">
                    <FontAwesome
                      name="edit"
                      size={24}
                      color="white"
                      onPress={() => handleEditTodo(item)}
                    />
                    <FontAwesome5
                      name="trash"
                      size={24}
                      color="white"
                      onPress={() => handleDeleteTodo(item.id)}
                    />
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      ) : (
        <View>
          <View className="p-5">
            <View className="flex flex-row justify-between items-center">
              <TextInput
                className="bg-slate-400 rounded-lg p-2 w-72"
                value={todos}
                placeholder="Add a new items"
                placeholderTextColor="white"
                onChangeText={(value) => setTodos(value)}
              />
              <TouchableOpacity
                className="bg-[#EC6E4C] rounded-xl"
                onPress={HandleAddToDo}
              >
                <Text className="text-white font-bold text-center px-5 py-3">
                  +
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text className="font-bold text-center text-3xl">
            wahts on your mind ?
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
}

// <FontAwesome5 name="dollar-sign" size={24} color="green" />
