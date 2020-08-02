<template>
  <el-menu
    class="navbar"
    :show-timeout="200"
    mode="horizontal"
    background-color="#00142a"
    text-color="hsla(0, 0%, 100%, .65)"
    active-text-color="#409EFF"
  >
    <el-menu-item class="logo">
      <img src="https://img.alicdn.com/tfs/TB13UQpnYGYBuNjy0FoXXciBFXa-242-134.png" width="40" />
      <span class="site-name">钉钉管理后台</span>
    </el-menu-item>
    <template v-for="item in asideMenuConfig">
      <el-menu-item
        @click="$router.push(item.appName)"
        v-if="item.appPath"
        :index="item.appPath"
        :key="item.name"
      >
        <i v-if="item.icon" :class="item.icon" />
        <span v-if="item.name" slot="title">{{ item.name }}</span>
      </el-menu-item>

    </template>
    <div class="user-profile-container" trigger="click">
      <div class="user-profile-content">
        <el-dropdown>
          <div class="user-profile-body">
            <img
              class="user-avatar"
              src="https://img.alicdn.com/tfs/TB1ONhloamWBuNjy1XaXXXCbXXa-200-200.png"
            />
            <span class="user-name">mock</span>
          </div>
          <el-dropdown-menu slot="dropdown" class="user-dropdown">
            <router-link to="/">
              <el-dropdown-item>我的主页</el-dropdown-item>
            </router-link>
            <router-link to="/">
              <el-dropdown-item>个人设置</el-dropdown-item>
            </router-link>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </el-menu>
</template>

<script>
import { asideMenuConfig } from "@/config/menu";
export default {
  name: "NavBar",
  data() {
    return {
      asideMenuConfig: {}
    };
  },
  async created() {
    this.asideMenuConfig = await asideMenuConfig();
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  height: 64px;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 64px;
    line-height: 64px;
    background: #002140;
    color: #fff;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    overflow: hidden;
  }
  .site-name {
    margin-left: 10px;
  }
  .user-profile-container {
    color: white;
    position: absolute;
    right: 20px;
    cursor: pointer;
    .user-profile-content {
      display: flex;
      padding: 20px 0;
    }
    .menu-icons {
      display: flex;
      align-items: center;
      .menu-icon {
        padding: 0 12px;
        .icon {
          display: inline-block;
          font-size: 18px;
          text-align: center;
        }
      }
    }
    .user-profile-body {
      position: relative;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding-right: 14px;
    }
    .user-avatar {
      width: 24px;
      height: 24px;
      margin: 0 8px 0 12px;
      border-radius: 4px;
    }
    .user-name {
      color: white;
    }
    .user-department {
      font-size: 12px;
      color: white;
    }
    .el-icon-caret-bottom {
      position: absolute;
      right: 0;
      top: 13px;
      font-size: 12px;
    }
  }
}
</style>

