import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CloudBookmark, CloudBookmarkPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CloudBookmark",
  component: CloudBookmark,
} as ComponentMeta<typeof CloudBookmark>;

const Template: ComponentStory<typeof CloudBookmark> = (
  args: CloudBookmarkPropsI
) => (
  <x.div display="flex" gap="20px">
    <CloudBookmark {...args} />
    <CloudBookmark {...args} fill="red.500" />
    <CloudBookmark {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
