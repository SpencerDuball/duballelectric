import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { WatchAlt, WatchAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/WatchAlt",
  component: WatchAlt,
} as ComponentMeta<typeof WatchAlt>;

const Template: ComponentStory<typeof WatchAlt> = (args: WatchAltPropsI) => (
  <x.div display="flex" gap="20px">
    <WatchAlt {...args} />
    <WatchAlt {...args} fill="red.500" />
    <WatchAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
