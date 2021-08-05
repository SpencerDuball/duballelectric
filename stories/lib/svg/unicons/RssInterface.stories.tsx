import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { RssInterface, RssInterfacePropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/RssInterface",
  component: RssInterface,
} as ComponentMeta<typeof RssInterface>;

const Template: ComponentStory<typeof RssInterface> = (
  args: RssInterfacePropsI
) => (
  <x.div display="flex" gap="20px">
    <RssInterface {...args} />
    <RssInterface {...args} fill="red.500" />
    <RssInterface {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
