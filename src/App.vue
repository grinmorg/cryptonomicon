<template>
  <div class="container mx-auto flex flex-col items-center bg-gray-100 p-4">
    <div class="container">
      <div class="w-full my-4"></div>
      <section>
        <div class="flex">
          <div class="max-w-xs">
            <label for="wallet" class="block text-sm font-medium text-gray-700"
              >Введите монету:</label
            >
            <div class="mt-1 relative rounded-md shadow-md">
              <input
                v-model="ticker"
                @keydown.enter="add"
                @input="tickerAutocomplete"
                type="text"
                name="wallet"
                id="wallet"
                class="block w-full pr-10 border-gray-300 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm rounded-md"
                placeholder="Например DOGE"
              />
            </div>
          </div>
        </div>
        <button
          :disabled="isLoading"
          @click="add"
          type="button"
          :class="{
            'bg-gray-200': isLoading,
            'bg-gray-600 hover:bg-gray-700': !isLoading,
          }"
          class="my-4 inline-flex items-center py-2 px-4 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-full text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          <!-- Heroicon name: solid/mail -->
          <svg
            class="-ml-0.5 mr-2 h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="#ffffff"
          >
            <path
              d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
            ></path>
          </svg>
          Добавить монету
        </button>
      </section>
      <template v-if="tickers.length > 0">
        <hr class="w-full border-t border-gray-600 my-4" />
        <!-- Пагинация -->
        <div>
          <button
            v-if="page > 1"
            @click="page = page - 1"
            class="my-4 mx-2 inline-flex items-center py-2 px-4 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-full text-white bg-blue-300 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Назад
          </button>
          <button
            v-if="hasNextPage"
            @click="page = page + 1"
            class="my-4 inline-flex items-center py-2 px-4 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-full text-white bg-blue-300 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Вперед
          </button>
          <div>Фильтр: <input type="text" v-model="filter" /></div>
        </div>
        <hr class="w-full border-t border-gray-600 my-4" />
        <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
          <div
            v-for="(coin, idx) in paginatedTickers"
            :key="idx"
            @click="select(coin)"
            :class="{
              'border-4': selectedTicker === coin,
            }"
            class="bg-white overflow-hidden shadow rounded-lg border-purple-800 border-solid cursor-pointer"
          >
            <div class="px-4 py-5 sm:p-6 text-center">
              <dt class="text-sm font-medium text-gray-500 truncate">
                {{ coin.name }} - USD
              </dt>
              <dd class="mt-1 text-3xl font-semibold text-gray-900">
                {{ coin.price }}
              </dd>
            </div>
            <div class="w-full border-t border-gray-200"></div>
            <button
              @click.stop="handleDelete(coin)"
              class="flex items-center justify-center font-medium w-full bg-gray-100 px-4 py-4 sm:px-6 text-md text-gray-500 hover:text-gray-600 hover:bg-gray-200 hover:opacity-20 transition-all focus:outline-none"
            >
              <svg
                class="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="#718096"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clip-rule="evenodd"
                ></path></svg
              >Удалить
            </button>
          </div>
        </dl>
        <hr class="w-full border-t border-gray-600 my-4" />
      </template>
      <div class="preloader" v-if="isLoading">
        <span></span>
      </div>
      <section v-if="selectedTicker" class="relative">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          {{ selectedTicker.name }} - USD
        </h3>
        <div
          class="flex items-end border-gray-600 border-b border-l h-64 overflow-hidden"
        >
          <div
            v-for="(bar, idx) in normailzedGraph"
            :key="idx"
            :style="{
              height: `${bar}%`,
            }"
            class="bg-purple-800 border w-10"
          ></div>
        </div>
        <button
          @click="sel = null"
          type="button"
          class="absolute top-0 right-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns:svgjs="http://svgjs.com/svgjs"
            version="1.1"
            width="30"
            height="30"
            x="0"
            y="0"
            viewBox="0 0 511.76 511.76"
            style="enable-background:new 0 0 512 512"
            xml:space="preserve"
          >
            <g>
              <path
                d="M436.896,74.869c-99.84-99.819-262.208-99.819-362.048,0c-99.797,99.819-99.797,262.229,0,362.048    c49.92,49.899,115.477,74.837,181.035,74.837s131.093-24.939,181.013-74.837C536.715,337.099,536.715,174.688,436.896,74.869z     M361.461,331.317c8.341,8.341,8.341,21.824,0,30.165c-4.16,4.16-9.621,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251    l-75.413-75.435l-75.392,75.413c-4.181,4.16-9.643,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251    c-8.341-8.341-8.341-21.845,0-30.165l75.392-75.413l-75.413-75.413c-8.341-8.341-8.341-21.845,0-30.165    c8.32-8.341,21.824-8.341,30.165,0l75.413,75.413l75.413-75.413c8.341-8.341,21.824-8.341,30.165,0    c8.341,8.32,8.341,21.824,0,30.165l-75.413,75.413L361.461,331.317z"
                fill="#718096"
                data-original="#000000"
              ></path>
            </g>
          </svg>
        </button>
      </section>
    </div>
    <!-- <pre>{{ allTickers }}</pre> -->
  </div>
</template>

<script>
import { loadTicker } from "./api";

export default {
  name: "App",

  data() {
    return {
      isLoading: true,
      ticker: "",
      tickers: [],
      selectedTicker: null,
      graph: [],
      page: 1,
      filter: "",
    };
  },
  created() {
    // получаем из URL параметры
    const windowData = Object.fromEntries(new URL(window.location).searchParams.entries());

    // ключи которые ожидаются в localStorage
    const VALID_KEYS = ["filter", "page"];

    VALID_KEYS.forEach(key => {
      // если в параметрах находится необходимое нам значение
      if(windowData[key]) {

        // присваиваем это значение в this
        this[key] = windowData[key];
      }
    })

    if (windowData.filter) {
      this.filter = windowData.filter;
    }

    if (windowData.page) {
      this.page = windowData.page;
    }

    // забираем cryptonomicon-list из localStorage
    const tickersData = localStorage.getItem("cryptonomicon-list");

    // проверка, так как может вернуться null
    if (tickersData) {
      this.tickers = JSON.parse(tickersData);
      this.tickers.forEach((ticker) => {
        this.subscribeToUpdate(ticker.name);
      });
    }

    // добавляем все монеты
    setTimeout(async () => {
      const f = await fetch(
        `https://min-api.cryptocompare.com/data/all/coinlist?summary=true`
      );
      const data = await f.json();
      // TODO: сделал массив с названиям для автокомплит, теперь сотавлось сделать сам комплит
      this.allTickers = Object.values(data.Data).map(i => i.Symbol); 

      // убираем preloader
      this.isLoading = false;
    }, 1000);
  },

  computed: {
    startIndex() {
      return (this.page - 1) * 6;
    },
    endIndex() {
      return this.page * 6;
    },
    filteredTickers() {
      // условие для фильтрации: если имя тикера включает символы из this.filter, то он будет включен в массив который вернется
      return this.tickers.filter((ticker) =>
        ticker.name.includes(this.filter)
      );
    },
    paginatedTickers() {
      return this.filteredTickers.slice(this.startIndex, this.endIndex); //slice для пагинации
    },
    hasNextPage() {
      return this.filteredTickers.length > this.endIndex
    },
    normailzedGraph() {
      const maxValue = Math.max(...this.graph);
      const minValue = Math.min(...this.graph);

      if (maxValue === minValue) {
        return this.graph.map(() => 50);
      }
      return this.graph.map(
        (price) => 5 + ((price - minValue) * 95) / (maxValue - minValue)
      );
    },
    pageStateOptions() {
      return {
        filter: this.filter,
        page: this.page,
      }
    }
  },

  methods: {
    subscribeToUpdate(tickerName) {
      setInterval(async () => {
       const exchangeData = await loadTicker(tickerName);

        this.tickers.find((c) => c.name === tickerName).price =
          exchangeData.USD > 1 ? exchangeData.USD.toFixed(2) : exchangeData.USD.toPrecision(2);

        if (this.selectedTicker?.name === tickerName) {
          this.graph.push(exchangeData.USD);
        }
      }, 3000);
      this.ticker = "";
    },
    add() {
      const currentTicker = { name: this.ticker, price: "-" };
      this.tickers = [...this.tickers, currentTicker];

      // сброс фильрации
      this.filter = "";

      this.subscribeToUpdate(currentTicker.name);
    },
    select(coin) {
      this.selectedTicker = coin;
    },
    handleDelete(coin) {
      this.tickers = this.tickers.filter((c) => c !== coin);

      if (this.selectedTicker === coin) {
        this.selectedTicker = null;
      }

      // пересохраняю LS  FIXME: Сам добавил
      localStorage.setItem("cryptonomicon-list", JSON.stringify(this.tickers));
    }
  },
  watch: {
    selectedTicker() {
      this.graph = [];
    },
    tickers() {
      localStorage.setItem("cryptonomicon-list", JSON.stringify(this.tickers));
    },
    paginatedTickers() {
      if (this.paginatedTickers.length === 0 && this.page > 1) {
        this.page -= 1;
      }
    },
    filter() {
      // когда переменная this.filter изменилась
      this.page = 1;
    },
    pageStateOptions(value) {
      // дописываем в URL текущую страницу
      window.history.pushState(
        null,
        document.title,
        `${window.location.pathname}?filter=${value.filter}&page=${value.page}`
      );
    },
  },
};
</script>

<style>
.preloader {
  @apply animate-spin mx-auto relative border-4 rounded-full w-36 h-36;
}
.preloader span {
  @apply absolute -top-1 left-12 bg-gray-100 block w-12 h-4;
}
</style>
