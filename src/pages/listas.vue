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
              <q-btn @click="tab='results'">DATA</q-btn>
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

          <div class="q-pa-md row justify-center">
            <div style="width: 100%; max-width: 900px">
              <!-- <q-chat-message
                v-for="(item,index) in logArrSearch"
                :key="index"
                :name="`<b>${item.username}</b> - line ${item.linha}`"
                :text="[item.msg]"
                text-sanitize
                :stamp="`${item.data} ${item.hora}`"
                text-color="white"
                :bg-color="randomBackgroundColor(item.username)"
                :sent="item.username===username"
              />-->

              <q-table
                title="PERGUNTA"
                :data="data"
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
                      <!-- <q-card-section>
                        <q-checkbox dense v-model="props.selected" :label="props.row.name"/>
                      </q-card-section>-->
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
export default {
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
      username: ""
    };
  },
  mounted() {},
  computed: {},
  watch: {
    jsonString: "jsonData"
  },
  methods: {
    jsonData() {
      try {
        this.data = JSON.parse(this.jsonString);
      } catch (error) {
        console.log(error);
      }
    },
    getType(txt) {
      return txt.length > 126 ? "textarea" : "text";
    },
    randomBackgroundColor(seed) {
      return this.colors[seed.length % this.colors.length];
    }
  }
};
</script>
