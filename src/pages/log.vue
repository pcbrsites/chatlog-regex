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
        <q-tab name="log" label="LOG"/>
        <q-tab name="chat" label="CHAT"/>
      </q-tabs>

      <q-separator/>

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="log">
          <q-card flat>
            <q-card-section>
              <q-btn @click="tab='chat'">VER LOG</q-btn>
              <open-file @load="(v)=>logtxt=v"/>
              <q-select
                outlined
                v-model="seelctRegex"
                @input="onChageRegex"
                label="FILE REGEX"
                emit-value
                :options="listRegexs"
              ></q-select>
              <q-input outlined v-model="strRegx" label="regex" placeholder="LOG"/>
              <q-input
                outlined
                type="textarea"
                v-model="logtxt"
                float-label="LOG"
                placeholder="LOG"
              />
            </q-card-section>
          </q-card>
        </q-tab-panel>
        <q-tab-panel name="chat">
          <div class="row">
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
          </div>

          <div class="q-pa-md row justify-center">
            <div style="width: 100%; max-width: 400px">
              <q-chat-message
                v-for="(item,index) in logArrSearch"
                :key="index"
                :name="`<b>${item.username}</b> - line ${item.linha}`"
                :text="[item.msg]"
                text-sanitize
                :stamp="`${item.data} ${item.hora}`"
                text-color="white"
                :bg-color="randomBackgroundColor(item.username)"
                :sent="item.username===username"
              />
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
      tab: "log",
      search: "",
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

      strRegx: `LOG - \\w+: \\d+ \\| (\\d{2}\\:\\d{2}\\:\\d{2}) (\\d{2}\\/\\d{2}\\/\\d{4}) \\=\\> (.*?) \\| (.*)`,
      logtxt: `LOG - SV: 1 | 00:00:00 00/00/0000 => username | texto`,
      seelctRegex: "chat",
      listRegexs: [
        {
          label: "chat",
          value: "chat",
          regex:
            "LOG - \\w+: \\d+ \\| (\\d{2}\\:\\d{2}\\:\\d{2}) (\\d{2}\\/\\d{2}\\/\\d{4}) \\=\\> (.*?) \\| (.*)"
        },
        {
          label: "admin",
          value: "admin",
          regex:
            "LOG - \\w+: \\d+ \\| (\\d{2}\\:\\d{2}\\:\\d{2}) (\\d{2}\\/\\d{2}\\/\\d{4}) \\=\\> O .*? \\((.*?)\\) (.*)"
        },
        {
          label: "antiCheat",
          value: "antiCheat",
          regex:
            "LOG - \\w+: \\d+ \\| (\\d{2}\\:\\d{2}\\:\\d{2}) (\\d{2}\\/\\d{2}\\/\\d{4}) \\=\\> O (usuário .*?) (.*)"
        },
        {
          label: "homesLog",
          value: "homesLog",
          regex:
            "LOG - \\w+: \\d+ \\| (\\d{2}\\:\\d{2}\\:\\d{2}) (\\d{2}\\/\\d{2}\\/\\d{4}) \\=\\> (.*?)\\) (.*)"
        },
        {
          label: "jailLog",
          value: "jailLog",
          regex:
            "LOG - \\w+: \\d+ \\| (\\d{2}\\:\\d{2}\\:\\d{2}) (\\d{2}\\/\\d{2}\\/\\d{4}) \\=\\> (.*?) (.*)"
        },
        {
          label: "staffLog",
          value: "staffLog",
          regex:
            "LOG - \\w+: \\d+ \\| (\\d{2}\\:\\d{2}\\:\\d{2}) (\\d{2}\\/\\d{2}\\/\\d{4}) \\=\\> O STAFF (.*?) (.*)"
        }
      ],
      logs: [],
      username: ""
    };
  },
  mounted() {
    window.getRegex = this.getRegex;
  },
  computed: {
    logArr: {
      get() {
        let arr = this.logtxt
          .split("\n")
          .map((v, i) => this.getRegex(v, i + 1));
        return arr;
      }
    },
    logArrSearch: {
      get() {
        return this.logArr.filter(v => {
          return String(v.full)
            .toUpperCase()
            .includes(String(this.search).toUpperCase());
        });
      }
    },
    listsUsernames: {
      get() {
        let data = [];
        this.logArr.forEach(element => {
          if (!data.includes(element.username)) {
            data.push(element.username);
          }
        });
        return data;
      }
    }
  },
  methods: {
    getRegex(txt, linha = null) {
      try {
        const regex = new RegExp(this.strRegx, "gm");
        const data = regex.exec(txt);
        return {
          hora: data[1],
          data: data[2],
          username: "@" + data[3],
          msg: data[4],
          full: data[0],
          linha
        };
      } catch (error) {
        return {
          hora: "Error Regex",
          data: "Error Regex",
          username: "Error Regex na linha -" + linha,
          msg: txt,
          full: "Error Regex",
          linha
        };
      }
    },
    onChageRegex(type) {
      const row = this.listRegexs.find(v => v.value == type);
      if (!row) {
        return;
      }
      debugger;
      // console.log(data);
      this.strRegx = row.regex;
    },
    randomBackgroundColor(seed) {
      return this.colors[seed.length % this.colors.length];
    }
  }
};
</script>
