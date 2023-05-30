// S

// O

// L
class Database {
  connect() {}
  readData() {}
}

class SqlDatabase extends Database {
  joinTables() {}
}

class MongoDB extends Database {
  joinIndex() {}
}

// I
interface Common {
  sum: () => number;
  fetchData: () => Promise<void>;
}

interface CommonSecond extends Common {
  logInfo: () => void;
}

class First implements CommonSecond {
  sum() {
    return 5;
  }

  logInfo() {}

  fetchData() {
    return Promise.resolve();
  }
}

class Second implements Common {
  sum() {
    return 5;
  }

  fetchData() {
    return Promise.resolve();
  }
}

// D
interface MusicApi {
  fetchData: () => string;
}

class VKMusic implements MusicApi {
  fetchData() {
    return 'vk';
  }
}

class YandexMusic implements MusicApi {
  fetchData() {
    return 'yandex';
  }
}

class MusicClient implements MusicApi {
  api: MusicApi;

  constructor(api: MusicApi) {
    this.api = api;
  }

  fetchData() {
    return this.api.fetchData();
  }
}

const fetchMusicData = () => {
  const api = new MusicClient(new YandexMusic());

  api.fetchData();
};
