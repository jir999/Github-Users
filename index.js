
const Base_Url = 'https://api.github.com/users';

const dataCaller = new FetchBuilder(Base_Url).build();

const UserInstance = new UserStore();

FillData(dataCaller);




console.log(UserInstance)
  