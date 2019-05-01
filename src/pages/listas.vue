<template>
  <q-page>
    <q-card flat>
      <q-tabs
        v-model="tab"
        dense
        class="bg-grey-3 text-grey-7"
        active-color="primary"
        indicator-color="purple"
        align="justify"
      >
        <q-tab name="data" label="JSON"/>
        <q-tab name="results" label="RESULTS"/>
      </q-tabs>

      <q-separator/>

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="data">
          <q-card flat>
            <q-card-section>
              <open-file @load="(v)=>jsonString=v"/>
              <q-btn @click="tab='results'" icon="system_update" flat>PROCESSAR DADOS</q-btn>
              <q-input
                outlined
                type="textarea"
                v-model="jsonString"
                float-label="JSON"
                placeholder="JSON"
              />
            </q-card-section>
          </q-card>
        </q-tab-panel>
        <q-tab-panel name="results">
          <!-- <div class="row">
            <div class="col">
              <q-select outlined v-model="username" label="@Username" :options="listsUsernames">
                <template v-if="username" v-slot:append>
                  <q-icon name="cancel" @click.stop="username = null" class="cursor-pointer"/>
                </template>
              </q-select>
            </div>
            <div class="col">
              <q-input outlined v-model="search" label="PESQUISAR"></q-input>
            </div>
          </div>-->

          <div class="row">
            <div class="col">
              <q-input outlined v-model="search" label="PESQUISAR"></q-input>
            </div>
            <div class="col">
              <q-btn
                color="primary"
                icon="cloud_download"
                flat
                label="Download"
                @click="download()"
              ></q-btn>
            </div>
          </div>
          <div class="q-pa-md row justify-center">
            <div style="width: 100%; max-width: 900px">
              <q-table
                title="PERGUNTA"
                :data="dataSearch"
                :columns="columns"
                row-key="name"
                :filter="filter"
                grid
                hide-header
                :rows-per-page-options="[1,2,3,4,5,10,25,50,0]"
              >
                <template v-slot:item="props">
                  <div
                    class="q-pa-xs col-xs-12 col-sm-12 col-md-12 col-lg-6 grid-style-transition"
                    :style="props.selected ? 'transform: scale(0.95);' : ''"
                  >
                    <q-card :class="props.selected ? 'bg-grey-2' : ''">
                      <!-- <q-separator/> -->
                      <q-list bordered separator>
                        <q-item
                          v-for="(value, label) in props.row"
                          :key="value+'-'+label"
                          clickable
                        >
                          <q-item-section v-if="label == 'Carimbo de data'">
                            <q-item-label color="success">{{label }}</q-item-label>
                            <pre>{{value}}  </pre>
                          </q-item-section>
                          <q-item-section v-else>
                            <q-item-label overline>{{label }}</q-item-label>

                            <q-input
                              outlined
                              :type="getType(value)"
                              :value="value"
                              :label="label"
                              :placeholder="label"
                            />
                            <br>
                          </q-item-section>
                        </q-item>
                        <q-item>
                          <q-item>
                            <q-btn
                              flat
                              color="red"
                              icon="delete"
                              label="REMOVER"
                              @click="removeItem(props.row.index)"
                            ></q-btn>
                          </q-item>
                        </q-item>
                      </q-list>
                      <!-- {{props}} -->
                      <!-- <h1 v-for="(label, pergunta) in props.row" :key="pergunta+'-'+label">
                        {{label}} ::
                        {{pergunta}}
                      </h1>-->
                    </q-card>
                    <br>
                    <br>
                    <hr>
                    <br>
                    <br>
                    <br>
                  </div>
                </template>
              </q-table>
            </div>
          </div>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </q-page>
</template>

<style></style>

<script>
import openFile from "components/openFile.vue";

export default {
  components: { openFile },
  name: "PageIndex",
  data() {
    return {
      jsonString: "",

      tab: "data",
      colors: [
        "red",
        "pink",
        "purple",
        "deep-purple",
        "indigo",
        "blue",
        "light-blue",
        "cyan",
        "teal",
        "green",
        "light-green",
        "lime",
        "yellow",
        "amber",
        "orange",
        "deep-orange",
        "brown",
        "grey",
        "blue-grey"
      ],
      columns: [],
      data: [],
      selected: [],
      filter: "",
      username: "",
      search: ""
    };
  },
  mounted() {},
  computed: {
    dataSearch: {
      get() {
        return this.data.filter(v => {
          for (let x in v) {
            let txt = String(v[x]).toUpperCase();
            if (txt.includes(String(this.search).toUpperCase())) {
              return true;
            }
          }
          return false;
        });
      }
    }
  },
  watch: {
    jsonString: "jsonData"
  },
  methods: {
    jsonData() {
      try {
        let data = JSON.parse(this.jsonString);
        data.forEach((v, i) => {
          v.index = i;
        });
        this.data = data;
      } catch (error) {
        console.log(error);
      }
    },
    getType(txt) {
      return txt.length > 126 ? "textarea" : "textarea";
    },
    randomBackgroundColor(seed) {
      return this.colors[seed.length % this.colors.length];
    },
    removeItem(index) {
      this.data.splice(index, 1);
    },
    download() {
      console.log("------>donwload");
      var text = JSON.stringify(this.data);
      var dataStr =
        "data:text/json;charset=utf-8," +
        encodeURIComponent(JSON.stringify(text));
      var dlAnchorElem = document.createElement("a");

      dlAnchorElem.setAttribute("href", dataStr);
      dlAnchorElem.setAttribute("download", "listas.json");
      dlAnchorElem.click();
      console.log("------>donwload", dataStr, dlAnchorElem);
      dlAnchorElem.remove();
    }
  }
};
</script>
