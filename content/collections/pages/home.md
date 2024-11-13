---
id: d38c827c-d171-4ecd-924f-8aa6a000477f
blueprint: pages
title: Home
seo_title: title
seo_meta_description: general
seo_og_description: general
seo_og_title: title
seo_tw_title: title
seo_tw_description: general
updated_by: 81182517-0b3c-41ac-9490-e6b5f44c2c87
updated_at: 1722848516
blocks:
  -
    id: ly8szzqj
    title: 'Welcome to Gradiente'
    image: hero_image.png
    rich_text:
      -
        type: paragraph
        attrs:
          textAlign: left
        content:
          -
            type: text
            text: 'Elevate your business with seamless SaaS solutions. Gradiente offers intuitive and powerful tools to streamline your workflow and boost productivity.'
    toggle: true
    label: 'Download for Free'
    link: '#'
    target_blank: false
    has_icon: false
    button_variant: primary
    type: hero_with_image_right
    enabled: true
  -
    id: ly8t0ncp
    title: 'Trusted by top-tier product companies'
    logos:
      - logo_clouds/circle-1.png
      - logo_clouds/earth-2-1.png
      - logo_clouds/goldline-1.png
      - logo_clouds/velocity-9-1.png
      - logo_clouds/treva-1.png
    type: logo_cloud
    enabled: true
  -
    id: ly8t1atr
    title: "Unlock the Full Potential of Your Business with Gradiente's Comprehensive Features"
    rich_text:
      -
        type: paragraph
        attrs:
          textAlign: left
        content:
          -
            type: text
            text: 'Ultimate tools built specifically for video streaming, engineered by experts, approved by industry leaders.'
    toggle: true
    label: 'Learn More'
    target_blank: false
    has_icon: false
    button_variant: primary
    features:
      -
        id: ly8t1mkj
        title: 'Advanced Analytics'
        rich_text:
          -
            type: paragraph
            attrs:
              textAlign: left
            content:
              -
                type: text
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat faucibus diam, egestas aliquet'
        image: feature-hero.png
        toggle: false
        type: feature
        enabled: true
      -
        id: ly8t2vry
        title: 'Seamless integration'
        rich_text:
          -
            type: paragraph
            attrs:
              textAlign: left
            content:
              -
                type: text
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat faucibus diam, egestas aliquet'
        image: feature-hero.png
        toggle: false
        type: feature
        enabled: true
    type: features_grid
    enabled: true
    link: '#'
  -
    id: ly8tj7c7
    title: 'Blog news'
    rich_text:
      -
        type: paragraph
        attrs:
          textAlign: left
        content:
          -
            type: text
            text: 'Stay Updated with the Gradiente Blog'
    entries_to_show: '3'
    highlight_first: true
    type: latest_blog_posts
    enabled: true
    blog_header_title: 'Blog news'
  -
    id: lycn7vmc
    variant: variant_2
    title: 'Built for security and scale'
    rich_text:
      -
        type: paragraph
        attrs:
          textAlign: left
        content:
          -
            type: text
            text: 'Ultimate tools built specifically for video streaming, engineered by experts, approved by industry leaders.'
    type: cta
    enabled: true
  -
    id: lycn8gj7
    title: 'Still not convinced?'
    rich_text:
      -
        type: paragraph
        attrs:
          textAlign: left
        content:
          -
            type: text
            text: 'Here are some other features you and your users will love.'
    buttons:
      -
        id: lycn8t59
        toggle: true
        label: 'Contact Us'
        link: 'entry::3c01a2d8-59e3-492a-a90e-2e3514da50d3'
        target_blank: false
        has_icon: false
        button_variant: outline
        type: button
        enabled: true
      -
        id: lycn9npn
        toggle: true
        label: 'Start Free Trial'
        link: '#'
        target_blank: false
        has_icon: false
        button_variant: primary
        type: button
        enabled: true
    stats:
      -
        id: lycn97kl
        title: '5.0 Frame-accurate'
        rich_text:
          -
            type: paragraph
            attrs:
              textAlign: left
            content:
              -
                type: text
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat faucibus diam, egestas aliquet'
        type: new_set
        enabled: true
      -
        id: lycna6t8
        title: Frame-accurate
        rich_text:
          -
            type: paragraph
            attrs:
              textAlign: left
            content:
              -
                type: text
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat faucibus diam, egestas aliquet'
        type: new_set
        enabled: true
      -
        id: lycnae1h
        title: Frame-accurate
        rich_text:
          -
            type: paragraph
            attrs:
              textAlign: left
            content:
              -
                type: text
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat faucibus diam, egestas aliquet'
        type: new_set
        enabled: true
    type: cta_with_stats
    enabled: true
  -
    id: lycnbs38
    pricing:
      -
        id: lycnbwsm
        featured: false
        title: Starter
        rich_text:
          -
            type: paragraph
            attrs:
              textAlign: left
            content:
              -
                type: text
                text: 'For individuals and teams getting started.'
        price: '0'
        price_description: 'Free forever'
        list_title: Includes
        list_field:
          - 'Up to 10,000 External MAU'
          - 'Unlimited Social Connections'
          - 'Custom Domains'
          - 'User Role Management'
          - '5 Actions, Rules, Hooks'
        toggle: true
        label: 'Start For Free'
        link: '#'
        target_blank: false
        has_icon: false
        button_variant: outline
        type: pricing
        enabled: true
      -
        id: lycnd8dn
        featured: true
        title: Pro
        rich_text:
          -
            type: paragraph
            attrs:
              textAlign: left
            content:
              -
                type: text
                text: 'For individuals and teams getting started.'
        price: '8'
        price_description: 'Per member, per month Billed annually'
        list_title: Includes
        list_field:
          - 'Up to 10,000 External MAU'
          - 'Unlimited Social Connections'
          - 'Custom Domains'
          - 'User Role Management'
          - '5 Actions, Rules, Hooks'
        toggle: true
        label: 'Start For Free'
        link: '#'
        target_blank: false
        has_icon: false
        button_variant: primary
        type: pricing
        enabled: true
      -
        id: lycndoqu
        featured: false
        title: Enterprise
        rich_text:
          -
            type: paragraph
            attrs:
              textAlign: left
            content:
              -
                type: text
                text: 'For individuals and teams getting started.'
        price: '18'
        price_description: 'Per member, per month Billed annually'
        list_title: Includes
        list_field:
          - 'Up to 10,000 External MAU'
          - 'Unlimited Social Connections'
          - 'Custom Domains'
          - 'User Role Management'
          - '5 Actions, Rules, Hooks'
        toggle: true
        label: 'Start For Free'
        link: '#'
        target_blank: false
        has_icon: false
        button_variant: outline
        type: pricing
        enabled: true
    type: pricing
    enabled: true
---
