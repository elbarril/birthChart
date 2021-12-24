<template>
  <div class="userChart">
    <ChartDB :userName="userName" @getData="getData" />
    <h1>{{ userName }}</h1>
    <button class="openMetrics" @click="openMetrics">Metricas</button>
    <div class="chart" @click="closeMetrics()">
      <div title="Ascendente" class="ascendent" @click="showAscInfo()"></div>
      <div class="zones">
        <template v-for="(zone, index) in zones">
          <div :class="zone"></div>
        </template>
      </div>
      <div class="signs">
        <template v-for="(sign, index) in signs">
          <div :class="sign.class">{{ sign.char }}</div>
        </template>
      </div>
      <div id="info">
        <template v-for="(info, index) in starsInfo" :key="info.id">
          <div :id="info.star">
            <div>
              <template v-for="(data, index) in info.data" :key="data.title">
                <h2>
                  {{ data.title
                  }}<span id="close" @click="hideStarInfo(info.star)"></span>
                </h2>
                <p>{{ data.text }}</p>
              </template>
            </div>
          </div>
        </template>
      </div>
      <div class="stars" id="stars">
        <template v-for="(star, index) in stars">
          <div
            :class="star.class"
            @click="showStarInfo(star.class)"
            :title="star.class"
          >
            <span>{{ star.char }}</span>
          </div>
        </template>
      </div>
    </div>
    <div class="metrics" v-if="showMetrics">
      <div class="close" @click="closeMetrics"><span>close</span></div>
      <template v-for="(table, index) in metrics">
        <h2>{{ index }}</h2>
        <table>
          <thead>
            <tr>
              <td v-for="(item, columnIndex) in table">
                {{ item.title }}
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td v-for="(item, columnIndex) in table">{{ item.value }}%</td>
            </tr>
            <tr>
              <td v-for="(item, columnIndex) in table">
                <span v-show="item.value > 25">
                  {{ item.data }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </template>
    </div>
  </div>
</template>

<script>
import ChartDB from "@/components/ChartDB.vue";
import { ref, onMounted, onBeforeMount } from "vue";
import axios from "axios";
const apiURL = `http://localhost:3000/`;
const endpoints = [
  "info",
  "stars",
  "signs",
  "zones",
  "distribution",
  "elements",
  "polarity",
  "quadrants",
];
export default {
  name: "UserChart",
  props: {
    userName: String,
  },
  components: {
    ChartDB,
  },
  setup() {
    var starInfo,
      currentStarInfo,
      closeInfo,
      ascInfo,
      thereIsActiveStarInfo = false;
    const showMetrics = ref(false);
    const starsInfo = ref([]);
    const zones = ref([]);
    const signs = ref([]);
    const stars = ref([]);
    const distribution = ref([]);
    const elements = ref([]);
    const polarity = ref([]);
    const quadrants = ref([]);
    const metrics = ref({});

    onBeforeMount(() => {
      //loadData();
    });

    const showAscInfo = function () {
      ascInfo = document.getElementById("ascendent");
      closeInfo = ascInfo.getElementsByTagName("span");
      ascInfo.style.display = "block";
      closeInfo[0].addEventListener("click", () => {
        hideStarInfo("ascendent");
      });
      currentStarInfo = ascInfo;
      thereIsActiveStarInfo = true;
    };
    const showStarInfo = function (star) {
      starInfo = document.getElementById(star);
      starInfo.style.display = "block";
      starInfo.style.left = "140px";
      starInfo.style.top = "225px";
      currentStarInfo = starInfo;
      thereIsActiveStarInfo = true;
    };
    const hideStarInfo = function (star) {
      starInfo = document.getElementById(star);
      starInfo.style.display = "none";
      currentStarInfo = null;
      thereIsActiveStarInfo = false;
    };
    const getData = function (db) {
      starsInfo.value = db.info;
      zones.value = db.zones;
      signs.value = db.signs;
      stars.value = db.stars;
      distribution.value = db.distribution;
      elements.value = db.elements;
      polarity.value = db.polarity;
      quadrants.value = db.quadrants;
      metrics.value = {
        distribution,
        elements,
        polarity,
        quadrants,
      };
    };
    const loadData = async () => {
      try {
        endpoints.forEach(async (endpoint, index) => {
          const res = await axios.get(apiURL + endpoint);
          switch (endpoint) {
            case "info":
              starsInfo.value = res.data;
              break;
            case "zones":
              zones.value = res.data;
              break;
            case "signs":
              signs.value = res.data;
              break;
            case "stars":
              stars.value = res.data;
              break;
            case "distribution":
              distribution.value = res.data;
              break;
            case "elements":
              elements.value = res.data;
              break;
            case "polarity":
              polarity.value = res.data;
              break;
            case "quadrants":
              quadrants.value = res.data;
              break;
          }
        });
      } catch (error) {
        console.error(error);
      }
      metrics.value = {
        distribution,
        elements,
        polarity,
        quadrants,
      };
    };
    const openMetrics = () => {
      showMetrics.value = true;
    };
    const closeMetrics = () => {
      showMetrics.value = false;
    };
    return {
      showAscInfo,
      showStarInfo,
      hideStarInfo,
      zones,
      signs,
      stars,
      starsInfo,
      metrics,
      showMetrics,
      openMetrics,
      closeMetrics,
      getData,
    };
  },
};
</script>

<style src="@/css/userChart.css">
</style>
