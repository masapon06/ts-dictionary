export default function objectSample() {
    // const a: object = {
    //   name: 'Sugano',
    //   age: 23
    // }
    // a.name // aというobjectにはnameというプロパティがないとエラーが出る
    //
    // console.log("Object object sample 1:", a)
  
    // オブジェクトリテラル記法による型定義
    let country: {
      language: string
      name: string
    } = {
      language: 'Japanese',
      name: 'Japan',
    }
  
    console.log('Object object sample 2:', country)
  
    // 同じ構造のオブジェクトであれば再代入できる
    country = {
      language: 'English',
      name: 'United States of America',
    }
  
    console.log('Object object sample 3:', country)
  
    // オプショナル(?)なプロパティと読み取り専用(readonly)プロパティ
    const sugano: {
      age: number
      lastName: string
      readonly firstName: string
      gender?: string
    } = {
      age: 23,
      lastName: 'Yamada',
      firstName: 'Tarou',
    }
    sugano.lastName = 'Kamado'
    // sugano.firstName = 'Tanjiro' // firstNameプロパティはreadonlyなので再代入不可
    sugano.gender = 'male' // genderプロパティはオプショナルなので後から追加できる
  
    console.log('Object object sample 4:', sugano)
  
    // インデックスシグネチャ
    const capitals: {
      [countryName: string]: string
    } = {
      Japan: 'Tokyo',
      Korea: 'Seoul',
    }
    capitals.China = 'Beijing'
    capitals.Canada = 'Ottawa'
  
    console.log('Object object sample 5:', capitals)
  }