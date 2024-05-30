import AsyncStorage from '@react-native-async-storage/async-storage';

const urlApi = "https://www.abibliadigital.com.br/api/"

const searchAllBooks = async () => {
    try {
        const cachedData = await AsyncStorage.getItem('@all_books');
        if (cachedData !== null) {
            return JSON.parse(cachedData);
        }

        const response = await fetch(`${urlApi}/books`)
        if (!response.ok) {
            throw new Error("Erro na busca dos livros")
        }
        const data = await response.json()
        await AsyncStorage.setItem('@all_books', JSON.stringify(data));
        return data;
    } catch (error) {
        console.log(error);
    }
}

const getBook = async (abbrev) => {
    try {
        const cachedData = await AsyncStorage.getItem(`@book_${abbrev}`);
        if (cachedData !== null) {
            return JSON.parse(cachedData);
        }

        const response = await fetch(`${urlApi}/books/${abbrev}`)
        if (!response.ok) {
            throw new Error("Erro na busca do livro")
        }
        const data = await response.json()
        await AsyncStorage.setItem(`@book_${abbrev}`, JSON.stringify(data));
        return data;
    } catch (error) {
        console.log(error);
    }
}

const getChapter = async(abbrev, chapter) => {
    try {
        const cachedData = await AsyncStorage.getItem(`@chapter_${abbrev}_${chapter}`);
        if (cachedData !== null) {
            return JSON.parse(cachedData);
        }

        const response = await fetch(`${urlApi}/verses/nvi/${abbrev}/${chapter}`)
        if (!response.ok) {
            throw new Error("Erro na busca do capítulo")
        }
        const data = await response.json()
        await AsyncStorage.setItem(`@chapter_${abbrev}_${chapter}`, JSON.stringify(data));
        return data;
    } catch (error) {
        console.log(error);
    }
}

export {searchAllBooks, getBook, getChapter};
