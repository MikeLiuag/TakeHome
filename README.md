# React Native Take Home Project

## Assumptions

- You're familiar with React (w/ Hooks), React Native, TypeScript & GraphQL.
- Your React Native environment is setup for iOS and Android.

## Instructions

- Get a working iOS and Android app on the iOS Simulator and Android Emulator to demo.
- Please make Git commits on each task and sub-task.
- Once you are done, send the solution back to `ian@truenorthfleet.com`

## Tasks

### Task 1: Create a blank TypeScript React Native Project called `TakeHome`

- With the React Native CLI (Not Expo)
- With [Hermes JS engine](https://hermesengine.dev)
- With identifier `dev.takehome`
- With version `1.0.0`

### Task 2: Install [Apollo GraphQL Client](https://www.apollographql.com/docs/react/get-started)

### Task 3: Make a query to [SWAPI (Star Wars API)](https://studio.apollographql.com/public/star-wars-swapi/home?_gl=1%2A1iouxut%2A_ga%2AMTk5NjUzODE1NC4xNjU1OTE1MjI4%2A_ga_0BGG5V2W2K%2AMTY1NTkxNTIzMC4xLjEuMTY1NTkxNjQxMi4w&variant=current)Â 

- Display all the Starships in a [FlatList](https://reactnative.dev/docs/flatlist)
- Make types for Starships & all returned data

### Task 4: Get your Distance to Star Wars Land (in CA)

- Ask for Geolocation Permissions ([react-native-permissions](https://github.com/zoontek/react-native-permissions))
- Get current geolocation of user ([react-native-geolocation-service](https://github.com/Agontuk/react-native-geolocation-service#usage))
  Use [geolib to get your distance](https://github.com/manuelbieh/geolib#getdistancestart-end-accuracy--1) (in [miles](https://github.com/manuelbieh/geolib#convertdistancevalue-unit)) from your location to Star Wars Land (`33.814831976267016, -117.92057887641796`)