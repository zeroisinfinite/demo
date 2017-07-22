


<!DOCTYPE html>
<html lang="en" class=" is-copy-enabled">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=1020">
    
    
    <title>widget/widget.js at 1.1.1 · aralejs/widget</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="aralejs/widget" name="twitter:title" /><meta content="widget - The Base Class of Widget" name="twitter:description" /><meta content="https://avatars2.githubusercontent.com/u/1843069?v=3&amp;s=400" name="twitter:image:src" />
      <meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars2.githubusercontent.com/u/1843069?v=3&amp;s=400" property="og:image" /><meta content="aralejs/widget" property="og:title" /><meta content="https://github.com/aralejs/widget" property="og:url" /><meta content="widget - The Base Class of Widget" property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="web-socket" href="wss://live.github.com/_sockets/MTYzNjYzNToxZWQ3ZWE3MWE0NDUzMmMyMDAyNDI2Zjk5ZjNmN2U1YTo3OGE5YWMyN2RmNmY3NDFiNDEwOTM2OTIxMmFjNzMxZDAxNGJjODJhMDFkZTI2MmRiNWM5OTg5YzY5YTNmMTc0--4af9d26dab579dd9ca144032e10d20976335bbd1">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
        <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="79001DC8:362B:D5CC63E:560A473A" name="octolytics-dimension-request_id" /><meta content="1636635" name="octolytics-actor-id" /><meta content="zeroven" name="octolytics-actor-login" /><meta content="fc03cda6417b4f262a57c85e3514844146d37c42be0f74c4061fb4982f5d95a3" name="octolytics-actor-hash" />
    
    <meta content="Rails, view, blob#show" data-pjax-transient="true" name="analytics-event" />
    <meta class="js-ga-set" name="dimension1" content="Logged In">
      <meta class="js-ga-set" name="dimension4" content="Current repo nav">
    <meta name="is-dotcom" content="true">
        <meta name="hostname" content="github.com">
    <meta name="user-login" content="zeroven">

      <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#4078c0">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

      <!-- </textarea> --><!-- '"` --><meta content="authenticity_token" name="csrf-param" />
<meta content="qA4T8uVbs3i+llbx8HQm1HcuFJ6Fv7RQie7jSUqJeUkOYYkov9iIfecHga/GhjigwSXLAJOmtBj1bb9O5HOCuA==" name="csrf-token" />
    <meta content="73d9ff27734bbcc0d6f3b02150c4a45e3abdd368" name="form-nonce" />

    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-5650af1ae8e163bd2ef0eb33a898ef591ad49dbb2a67479adfaf4693eed5bdbb.css" integrity="sha256-VlCvGujhY70u8OszqJjvWRrUnbsqZ0ea369Gk+7Vvbs=" media="all" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github2-cd0f1fb6dca5258a58fb4fe7881c89479729c79b17b0d12700c40a639dc114af.css" integrity="sha256-zQ8fttylJYpY+0/niByJR5cpx5sXsNEnAMQKY53BFK8=" media="all" rel="stylesheet" />
    
    
    


    <meta http-equiv="x-pjax-version" content="acb8506038347b687e46a7ea2090b00b">

      
  <meta name="description" content="widget - The Base Class of Widget">
  <meta name="go-import" content="github.com/aralejs/widget git https://github.com/aralejs/widget.git">

  <meta content="1843069" name="octolytics-dimension-user_id" /><meta content="aralejs" name="octolytics-dimension-user_login" /><meta content="5062463" name="octolytics-dimension-repository_id" /><meta content="aralejs/widget" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="5062463" name="octolytics-dimension-repository_network_root_id" /><meta content="aralejs/widget" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/aralejs/widget/commits/1.1.1.atom" rel="alternate" title="Recent Commits to widget:1.1.1" type="application/atom+xml">

  </head>


  <body class="logged_in   env-production macintosh vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>

    
    
    



      
      <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <span class="mega-octicon octicon-mark-github"></span>
</a>


      <div class="site-search repo-scope js-site-search" role="search">
          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/aralejs/widget/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/aralejs/widget/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <label class="js-chromeless-input-container form-control">
    <div class="scope-badge">This repository</div>
    <input type="text"
      class="js-site-search-focus js-site-search-field is-clearable chromeless-input"
      data-hotkey="s"
      name="q"
      placeholder="Search"
      aria-label="Search this repository"
      data-global-scope-placeholder="Search GitHub"
      data-repo-scope-placeholder="Search"
      tabindex="1"
      autocapitalize="off">
  </label>
</form>
      </div>

      <ul class="header-nav left" role="navigation">
        <li class="header-nav-item">
          <a href="/pulls" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:pulls context:user" data-hotkey="g p" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls">
            Pull requests
</a>        </li>
        <li class="header-nav-item">
          <a href="/issues" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:issues context:user" data-hotkey="g i" data-selected-links="/issues /issues/assigned /issues/mentioned /issues">
            Issues
</a>        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com/" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
      </ul>

    
<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item">
      <span class="js-socket-channel js-updatable-content"
        data-channel="notification-changed:zeroven"
        data-url="/notifications/header">
      <a href="/notifications" aria-label="You have no unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s" data-ga-click="Header, go to notifications, icon:read" data-hotkey="g n">
          <span class="mail-status all-read"></span>
          <span class="octicon octicon-bell"></span>
</a>  </span>

  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link tooltipped tooltipped-s js-menu-target" href="/new"
       aria-label="Create new…"
       data-ga-click="Header, create new, icon:add">
      <span class="octicon octicon-plus left"></span>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <ul class="dropdown-menu dropdown-menu-sw">
        
<a class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>


  <a class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>



  <div class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="aralejs/widget">This repository</span>
  </div>
    <a class="dropdown-item" href="/aralejs/widget/issues/new" data-ga-click="Header, create new issue">
      New issue
    </a>

      </ul>
    </div>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name tooltipped tooltipped-s js-menu-target" href="/zeroven"
       aria-label="View profile and more"
       data-ga-click="Header, show menu, icon:avatar">
      <img alt="@zeroven" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/1636635?v=3&amp;s=40" width="20" />
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <div class="dropdown-menu  dropdown-menu-sw">
        <div class=" dropdown-header header-nav-current-user css-truncate">
            Signed in as <strong class="css-truncate-target">zeroven</strong>

        </div>



        <div class="dropdown-divider"></div>

          <a class="dropdown-item" href="/zeroven" data-ga-click="Header, go to profile, text:your profile">
            Your profile
          </a>
        <a class="dropdown-item" href="/stars" data-ga-click="Header, go to starred repos, text:your stars">
          Your stars
        </a>
        <a class="dropdown-item" href="/explore" data-ga-click="Header, go to explore, text:explore">
          Explore
        </a>
        <a class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">
          Help
        </a>

          <div class="dropdown-divider"></div>

          <a class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">
            Settings
          </a>

          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/logout" class="logout-form" data-form-nonce="73d9ff27734bbcc0d6f3b02150c4a45e3abdd368" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="lZSpDHIk+H+CYNAjJWkQLWgJ9ZpdLoPmsu1UudlO1Tifd/zvQSyx2EU/0bRcs71l+Xf8UBJkCqx+30m//alGNg==" /></div>
            <button class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
              Sign out
            </button>
</form>
      </div>
    </div>
  </li>
</ul>


    
  </div>
</div>

      

      


    <div id="start-of-content" class="accessibility-aid"></div>

    <div id="js-flash-container">
</div>


    <div role="main" class="main-content">
        <div itemscope itemtype="http://schema.org/WebPage">
    <div class="pagehead repohead instapaper_ignore readability-menu">

      <div class="container">

        <div class="clearfix">
          
<ul class="pagehead-actions">

  <li>
      <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-form-nonce="73d9ff27734bbcc0d6f3b02150c4a45e3abdd368" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="0nF7w8aIOP9VGG+rVK0X0dtSHqNjDOeH2SgYlFQ8zxeicK4MD/QqrpQhi6pGJGE4glTU+jJ6DWVJCb9Ikqzeqg==" /></div>    <input id="repository_id" name="repository_id" type="hidden" value="5062463" />

      <div class="select-menu js-menu-container js-select-menu">
        <a href="/aralejs/widget/subscription"
          class="btn btn-sm btn-with-count select-menu-button js-menu-target" role="button" tabindex="0" aria-haspopup="true"
          data-ga-click="Repository, click Watch settings, action:blob#show">
          <span class="js-select-button">
            <span class="octicon octicon-eye"></span>
            Watch
          </span>
        </a>
        <a class="social-count js-social-count" href="/aralejs/widget/watchers">
          24
        </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
            <div class="select-menu-header">
              <span class="select-menu-title">Notifications</span>
              <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
            </div>

            <div class="select-menu-list js-navigation-container" role="menu">

              <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                  <span class="select-menu-item-heading">Not watching</span>
                  <span class="description">Be notified when participating or @mentioned.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-eye"></span>
                    Watch
                  </span>
                </div>
              </div>

              <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                  <span class="select-menu-item-heading">Watching</span>
                  <span class="description">Be notified of all conversations.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-eye"></span>
                    Unwatch
                  </span>
                </div>
              </div>

              <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input id="do_ignore" name="do" type="radio" value="ignore" />
                  <span class="select-menu-item-heading">Ignoring</span>
                  <span class="description">Never be notified.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-mute"></span>
                    Stop ignoring
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
</form>
  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/aralejs/widget/unstar" class="js-toggler-form starred js-unstar-button" data-form-nonce="73d9ff27734bbcc0d6f3b02150c4a45e3abdd368" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="7Y2z+UKZ4z1zbCfuhrHLnhCGtl/DrEI1PdJ1h9rX5D6upJkMN9x9aVJ3VN+dC/toRMhrsW3g8eQ53PMRy3xjyg==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar aralejs/widget"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <span class="octicon octicon-star"></span>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/aralejs/widget/stargazers">
          44
        </a>
</form>
    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/aralejs/widget/star" class="js-toggler-form unstarred js-star-button" data-form-nonce="73d9ff27734bbcc0d6f3b02150c4a45e3abdd368" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="f2O+xdweaWzyqx4WdB1uhRX4CFa5wyQ2az5imk84wAav4+Q73PumffpJZg5UKNTscGT6PhXII500/8tT/RdeIw==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star aralejs/widget"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <span class="octicon octicon-star"></span>
        Star
      </button>
        <a class="social-count js-social-count" href="/aralejs/widget/stargazers">
          44
        </a>
</form>  </div>

  </li>

  <li>
          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/aralejs/widget/fork" class="btn-with-count" data-form-nonce="73d9ff27734bbcc0d6f3b02150c4a45e3abdd368" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="8Pe0TjyG2enQnJOGPQCbhAdTQRM3FZtfd/bSgnb9+4KF/xTLB5sZI4n1pzEZJFQo5sfIqEmhp76UKTBDAeAdaA==" /></div>
            <button
                type="submit"
                class="btn btn-sm btn-with-count"
                data-ga-click="Repository, show fork modal, action:blob#show; text:Fork"
                title="Fork your own copy of aralejs/widget to your account"
                aria-label="Fork your own copy of aralejs/widget to your account">
              <span class="octicon octicon-repo-forked"></span>
              Fork
            </button>
</form>
    <a href="/aralejs/widget/network" class="social-count">
      37
    </a>
  </li>
</ul>

          <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public ">
  <span class="mega-octicon octicon-repo"></span>
  <span class="author"><a href="/aralejs" class="url fn" itemprop="url" rel="author"><span itemprop="title">aralejs</span></a></span><!--
--><span class="path-divider">/</span><!--
--><strong><a href="/aralejs/widget" data-pjax="#js-repo-pjax-container">widget</a></strong>

  <span class="page-context-loader">
    <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
  </span>

</h1>

        </div>
      </div>
    </div>

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline ">
        <div class="repository-sidebar clearfix">
          
<nav class="sunken-menu repo-nav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container"
     data-issue-count-url="/aralejs/widget/issues/counts">
  <ul class="sunken-menu-group">
    <li class="tooltipped tooltipped-w" aria-label="Code">
      <a href="/aralejs/widget/tree/1.1.1" aria-label="Code" aria-selected="true" class="js-selected-navigation-item selected sunken-menu-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /aralejs/widget/tree/1.1.1">
        <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Issues">
        <a href="/aralejs/widget/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /aralejs/widget/issues">
          <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
          <span class="js-issue-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

    <li class="tooltipped tooltipped-w" aria-label="Pull requests">
      <a href="/aralejs/widget/pulls" aria-label="Pull requests" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g p" data-selected-links="repo_pulls /aralejs/widget/pulls">
          <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull requests</span>
          <span class="js-pull-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Wiki">
        <a href="/aralejs/widget/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g w" data-selected-links="repo_wiki /aralejs/widget/wiki">
          <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
  </ul>
  <div class="sunken-menu-separator"></div>
  <ul class="sunken-menu-group">

    <li class="tooltipped tooltipped-w" aria-label="Pulse">
      <a href="/aralejs/widget/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-selected-links="pulse /aralejs/widget/pulse">
        <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

    <li class="tooltipped tooltipped-w" aria-label="Graphs">
      <a href="/aralejs/widget/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-selected-links="repo_graphs repo_contributors /aralejs/widget/graphs">
        <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>
  </ul>


</nav>

            <div class="only-with-full-nav">
                
<div class="js-clone-url clone-url open"
  data-protocol-type="http">
  <h3><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/aralejs/widget.git" readonly="readonly" aria-label="HTTPS clone URL">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="js-clone-url clone-url "
  data-protocol-type="ssh">
  <h3><span class="text-emphasized">SSH</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="git@github.com:aralejs/widget.git" readonly="readonly" aria-label="SSH clone URL">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="js-clone-url clone-url "
  data-protocol-type="subversion">
  <h3><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/aralejs/widget" readonly="readonly" aria-label="Subversion checkout URL">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>



<div class="clone-options">You can clone with
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone" class="inline-form js-clone-selector-form is-enabled" data-form-nonce="73d9ff27734bbcc0d6f3b02150c4a45e3abdd368" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="6U6pOcKLRTb4VDtF/JplMZLovjCz4e0HYSOUHJoKE5BtlkiBMaxEU75DiUMG0YkzSpeUGa9SovWpKsaZr/SBrQ==" /></div><button class="btn-link js-clone-selector" data-protocol="http" type="submit">HTTPS</button></form>, <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone" class="inline-form js-clone-selector-form is-enabled" data-form-nonce="73d9ff27734bbcc0d6f3b02150c4a45e3abdd368" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="6Ea6EEa8jB3rQjm8z/LTI+ntejjlCyoHvDmS4I6h/XkzPF171hR6IGiewaPsXFGDFGC84FyqXBNhE/gR+8m42A==" /></div><button class="btn-link js-clone-selector" data-protocol="ssh" type="submit">SSH</button></form>, or <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone" class="inline-form js-clone-selector-form is-enabled" data-form-nonce="73d9ff27734bbcc0d6f3b02150c4a45e3abdd368" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="iF6Fe65iJDXG+smBeg+w58tFt8DzMqjZpJVq/5osjsz7xjPto74+DAlqiB3f7vJogG7o5CWV3EXNteTwnDeofQ==" /></div><button class="btn-link js-clone-selector" data-protocol="subversion" type="submit">Subversion</button></form>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</div>
  <a href="https://mac.github.com" class="btn btn-sm sidebar-button" title="Save aralejs/widget to your computer and use it in GitHub Desktop." aria-label="Save aralejs/widget to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-desktop-download"></span>
    Clone in Desktop
  </a>

              <a href="/aralejs/widget/archive/1.1.1.zip"
                 class="btn btn-sm sidebar-button"
                 aria-label="Download the contents of aralejs/widget as a zip file"
                 title="Download the contents of aralejs/widget as a zip file"
                 rel="nofollow">
                <span class="octicon octicon-cloud-download"></span>
                Download ZIP
              </a>
            </div>
        </div>
        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>

          

<a href="/aralejs/widget/blob/cee87a643b9a683bc1f3170bb8ea09457f225d2c/dist/widget.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:803db40f8f102b49cbde6e69fe854ae6 -->

  <div class="file-navigation js-zeroclipboard-container">
    
<div class="select-menu js-menu-container js-select-menu left">
  <span class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-ref="1.1.1"
    title="1.1.1"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Tag:</i>
    <span class="js-select-button css-truncate-target">1.1.1</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/aralejs/widget/blob/1.1.0-dev/dist/widget.js"
               data-name="1.1.0-dev"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="1.1.0-dev">
                1.1.0-dev
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/aralejs/widget/blob/2.0.0/dist/widget.js"
               data-name="2.0.0"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="2.0.0">
                2.0.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/aralejs/widget/blob/cmd/dist/widget.js"
               data-name="cmd"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="cmd">
                cmd
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/aralejs/widget/blob/gh-pages/dist/widget.js"
               data-name="gh-pages"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="gh-pages">
                gh-pages
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/aralejs/widget/blob/master/dist/widget.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="master">
                master
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/aralejs/widget/blob/spm2/dist/widget.js"
               data-name="spm2"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="spm2">
                spm2
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/aralejs/widget/tree/1.2.0/dist/widget.js"
                 data-name="1.2.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.2.0">1.2.0</a>
            </div>
            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/aralejs/widget/tree/1.1.1/dist/widget.js"
                 data-name="1.1.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.1.1">1.1.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/aralejs/widget/tree/1.1.0/dist/widget.js"
                 data-name="1.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.1.0">1.1.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/aralejs/widget/tree/1.0.4/dist/widget.js"
                 data-name="1.0.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.0.4">1.0.4</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/aralejs/widget/tree/1.0.3/dist/widget.js"
                 data-name="1.0.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.0.3">1.0.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/aralejs/widget/tree/1.0.2/dist/widget.js"
                 data-name="1.0.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.0.2">1.0.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/aralejs/widget/tree/1.0.1/dist/widget.js"
                 data-name="1.0.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.0.1">1.0.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/aralejs/widget/tree/1.0.0/dist/widget.js"
                 data-name="1.0.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.0.0">1.0.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/aralejs/widget/tree/0.9.17/dist/widget.js"
                 data-name="0.9.17"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.9.17">0.9.17</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/aralejs/widget/tree/0.9.16/dist/widget.js"
                 data-name="0.9.16"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.9.16">0.9.16</a>
            </div>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

    <div class="btn-group right">
      <a href="/aralejs/widget/find/1.1.1"
            class="js-show-file-finder btn btn-sm empty-icon tooltipped tooltipped-nw"
            data-pjax
            data-hotkey="t"
            aria-label="Quickly jump between files">
        <span class="octicon octicon-list-unordered"></span>
      </a>
      <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </div>

    <div class="breadcrumb js-zeroclipboard-target">
      <span class="repo-root js-repo-root"><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/aralejs/widget/tree/1.1.1" class="" data-branch="1.1.1" data-pjax="true" itemscope="url"><span itemprop="title">widget</span></a></span></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/aralejs/widget/tree/1.1.1/dist" class="" data-branch="1.1.1" data-pjax="true" itemscope="url"><span itemprop="title">dist</span></a></span><span class="separator">/</span><strong class="final-path">widget.js</strong>
    </div>
  </div>

<include-fragment class="commit commit-loader file-history-tease" src="/aralejs/widget/contributors/1.1.1/dist/widget.js">
  <div class="file-history-tease-header">
    Fetching contributors&hellip;
  </div>

  <div class="participation">
    <p class="loader-loading"><img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32-EAF2F5.gif" width="16" /></p>
    <p class="loader-error">Cannot retrieve contributors at this time</p>
  </div>
</include-fragment>
<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="btn-group">
      <a href="/aralejs/widget/raw/1.1.1/dist/widget.js" class="btn btn-sm " id="raw-url">Raw</a>
        <a href="/aralejs/widget/blame/1.1.1/dist/widget.js" class="btn btn-sm js-update-url-with-hash">Blame</a>
      <a href="/aralejs/widget/commits/1.1.1/dist/widget.js" class="btn btn-sm " rel="nofollow">History</a>
    </div>


        <button type="button" class="octicon-btn disabled tooltipped tooltipped-nw"
          aria-label="You must be on a branch to make or propose changes to this file">
          <span class="octicon octicon-pencil"></span>
        </button>
        <button type="button" class="octicon-btn octicon-btn-danger disabled tooltipped tooltipped-nw"
          aria-label="You must be on a branch to make or propose changes to this file">
          <span class="octicon octicon-trashcan"></span>
        </button>
  </div>

  <div class="file-info">
      2 lines (1 sloc)
      <span class="file-info-divider"></span>
    5.59 KB
  </div>
</div>

  

  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line">define(&quot;arale/widget/1.1.1/widget&quot;,[&quot;arale/base/1.1.1/base&quot;,&quot;arale/class/1.1.0/class&quot;,&quot;arale/events/1.1.0/events&quot;,&quot;$&quot;,&quot;./daparser&quot;,&quot;./auto-render&quot;],function(a,b,c){function d(){return&quot;widget-&quot;+w++}function e(a){return&quot;[object String]&quot;===v.call(a)}function f(a){return&quot;[object Function]&quot;===v.call(a)}function g(a){return x(document.documentElement,a)}function h(a){return a.charAt(0).toUpperCase()+a.substring(1)}function i(a){return f(a.events)&amp;&amp;(a.events=a.events()),a.events}function j(a,b){var c=a.match(y),d=c[1]+q+b.cid,e=c[2]||void 0;return e&amp;&amp;e.indexOf(&quot;{{&quot;)&gt;-1&amp;&amp;(e=k(e,b)),{type:d,selector:e}}function k(a,b){return a.replace(z,function(a,c){for(var d,f=c.split(&quot;.&quot;),g=b;d=f.shift();)g=g===b.attrs?b.get(d):g[d];return e(g)?g:A})}function l(a){return null==a||void 0===a}var m=a(&quot;arale/base/1.1.1/base&quot;),n=a(&quot;$&quot;),o=a(&quot;./daparser&quot;),p=a(&quot;./auto-render&quot;),q=&quot;.delegate-events-&quot;,r=&quot;_onRender&quot;,s=&quot;data-widget-cid&quot;,t={},u=m.extend({propsInAttrs:[&quot;initElement&quot;,&quot;element&quot;,&quot;events&quot;],element:null,events:null,attrs:{id:null,className:null,style:null,template:&quot;&lt;div&gt;&lt;/div&gt;&quot;,model:null,parentNode:document.body},initialize:function(a){this.cid=d();var b=this._parseDataAttrsConfig(a);u.superclass.initialize.call(this,a?n.extend(b,a):b),this.parseElement(),this.initProps(),this.delegateEvents(),this.setup(),this._stamp(),this._isTemplate=!(a&amp;&amp;a.element)},_parseDataAttrsConfig:function(a){var b,c;return a&amp;&amp;(b=a.initElement?n(a.initElement):n(a.element)),b&amp;&amp;b[0]&amp;&amp;!p.isDataApiOff(b)&amp;&amp;(c=o.parseElement(b)),c},parseElement:function(){var a=this.element;if(a?this.element=n(a):this.get(&quot;template&quot;)&amp;&amp;this.parseElementFromTemplate(),!this.element||!this.element[0])throw new Error(&quot;element is invalid&quot;)},parseElementFromTemplate:function(){this.element=n(this.get(&quot;template&quot;))},initProps:function(){},delegateEvents:function(a,b,c){if(0===arguments.length?(b=i(this),a=this.element):1===arguments.length?(b=a,a=this.element):2===arguments.length?(c=b,b=a,a=this.element):(a||(a=this.element),this._delegateElements||(this._delegateElements=[]),this._delegateElements.push(n(a))),e(b)&amp;&amp;f(c)){var d={};d[b]=c,b=d}for(var g in b)if(b.hasOwnProperty(g)){var h=j(g,this),k=h.type,l=h.selector;!function(b,c){var d=function(a){f(b)?b.call(c,a):c[b](a)};l?n(a).on(k,l,d):n(a).on(k,d)}(b[g],this)}return this},undelegateEvents:function(a,b){if(b||(b=a,a=null),0===arguments.length){var c=q+this.cid;if(this.element&amp;&amp;this.element.off(c),this._delegateElements)for(var d in this._delegateElements)this._delegateElements.hasOwnProperty(d)&amp;&amp;this._delegateElements[d].off(c)}else{var e=j(b,this);a?n(a).off(e.type,e.selector):this.element&amp;&amp;this.element.off(e.type,e.selector)}return this},setup:function(){},render:function(){this.rendered||(this._renderAndBindAttrs(),this.rendered=!0);var a=this.get(&quot;parentNode&quot;);if(a&amp;&amp;!g(this.element[0])){var b=this.constructor.outerBoxClass;if(b){var c=this._outerBox=n(&quot;&lt;div&gt;&lt;/div&gt;&quot;).addClass(b);c.append(this.element).appendTo(a)}else this.element.appendTo(a)}return this},_renderAndBindAttrs:function(){var a=this,b=a.attrs;for(var c in b)if(b.hasOwnProperty(c)){var d=r+h(c);if(this[d]){var e=this.get(c);l(e)||this[d](e,void 0,c),function(b){a.on(&quot;change:&quot;+c,function(c,d,e){a[b](c,d,e)})}(d)}}},_onRenderId:function(a){this.element.attr(&quot;id&quot;,a)},_onRenderClassName:function(a){this.element.addClass(a)},_onRenderStyle:function(a){this.element.css(a)},_stamp:function(){var a=this.cid;(this.initElement||this.element).attr(s,a),t[a]=this},$:function(a){return this.element.find(a)},destroy:function(){this.undelegateEvents(),delete t[this.cid],this.element&amp;&amp;this._isTemplate&amp;&amp;(this.element.off(),this._outerBox?this._outerBox.remove():this.element.remove()),this.element=null,u.superclass.destroy.call(this)}});n(window).unload(function(){for(var a in t)t[a].destroy()}),u.query=function(a){var b,c=n(a).eq(0);return c&amp;&amp;(b=c.attr(s)),t[b]},u.autoRender=p.autoRender,u.autoRenderAll=p.autoRenderAll,u.StaticsWhiteList=[&quot;autoRender&quot;],c.exports=u;var v=Object.prototype.toString,w=0,x=n.contains||function(a,b){return!!(16&amp;a.compareDocumentPosition(b))},y=/^(\S+)\s*(.*)$/,z=/{{([^}]+)}}/g,A=&quot;INVALID_SELECTOR&quot;}),define(&quot;arale/widget/1.1.1/daparser&quot;,[&quot;$&quot;],function(a,b){function c(a){return a.toLowerCase().replace(g,function(a,b){return(b+&quot;&quot;).toUpperCase()})}function d(a){for(var b in a)if(a.hasOwnProperty(b)){var c=a[b];if(&quot;string&quot;!=typeof c)continue;h.test(c)?(c=c.replace(/&#39;/g,&#39;&quot;&#39;),a[b]=d(i(c))):a[b]=e(c)}return a}function e(a){if(&quot;false&quot;===a.toLowerCase())a=!1;else if(&quot;true&quot;===a.toLowerCase())a=!0;else if(/\d/.test(a)&amp;&amp;/[^a-z]/i.test(a)){var b=parseFloat(a);b+&quot;&quot;===a&amp;&amp;(a=b)}return a}var f=a(&quot;$&quot;);b.parseElement=function(a,b){a=f(a)[0];var e={};if(a.dataset)e=f.extend({},a.dataset);else for(var g=a.attributes,h=0,i=g.length;i&gt;h;h++){var j=g[h],k=j.name;0===k.indexOf(&quot;data-&quot;)&amp;&amp;(k=c(k.substring(5)),e[k]=j.value)}return b===!0?e:d(e)};var g=/-([a-z])/g,h=/^\s*[\[{].*[\]}]\s*$/,i=this.JSON?JSON.parse:f.parseJSON}),define(&quot;arale/widget/1.1.1/auto-render&quot;,[&quot;$&quot;],function(a,b){var c=a(&quot;$&quot;),d=&quot;data-widget-auto-rendered&quot;;b.autoRender=function(a){return new this(a).render()},b.autoRenderAll=function(a,e){&quot;function&quot;==typeof a&amp;&amp;(e=a,a=null),a=c(a||document.body);var f=[],g=[];a.find(&quot;[data-widget]&quot;).each(function(a,c){b.isDataApiOff(c)||(f.push(c.getAttribute(&quot;data-widget&quot;).toLowerCase()),g.push(c))}),f.length&amp;&amp;seajs.use(f,function(){for(var a=0;a&lt;arguments.length;a++){var b=arguments[a],f=c(g[a]);if(!f.attr(d)){var h={initElement:f,renderType:&quot;auto&quot;},i=f.attr(&quot;data-widget-role&quot;);h[i?i:&quot;element&quot;]=f,b.autoRender&amp;&amp;b.autoRender(h),f.attr(d,&quot;true&quot;)}}e&amp;&amp;e()})};var e=&quot;off&quot;===c(document.body).attr(&quot;data-api&quot;);b.isDataApiOff=function(a){var b=c(a).attr(&quot;data-api&quot;);return&quot;off&quot;===b||&quot;on&quot;!==b&amp;&amp;e}});</td>
      </tr>
</table>

  </div>

</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

        </div>
      </div>
      <div class="modal-backdrop"></div>
    </div>
  </div>


    </div>

      <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>
        <li><a href="https://github.com/pricing" data-ga-click="Footer, go to pricing, text:pricing">Pricing</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2015 <span title="0.08009s from github-fe142-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



    
    
    

    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
        <span class="octicon octicon-x"></span>
      </button>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" integrity="sha256-+Ec97OckLaaiDVIxNjSIGzl1xSzrqh5sOBV8DyYYVpE=" src="https://assets-cdn.github.com/assets/frameworks-f8473dece7242da6a20d52313634881b3975c52cebaa1e6c38157c0f26185691.js"></script>
      <script async="async" crossorigin="anonymous" integrity="sha256-9jjTv2BBiyvEuUMxGg7jNx9BERoG8Z3tS1xAkDE9PX0=" src="https://assets-cdn.github.com/assets/github-f638d3bf60418b2bc4b943311a0ee3371f41111a06f19ded4b5c4090313d3d7d.js"></script>
      
      
    <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner hidden">
      <span class="octicon octicon-alert"></span>
      <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
      <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
    </div>
  </body>
</html>

