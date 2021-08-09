import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Yen, YenPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Yen",
  component: Yen,
} as ComponentMeta<typeof Yen>;

const Template: ComponentStory<typeof Yen> = (args: YenPropsI) => (
  <x.div display="flex" gap="20px">
    <Yen {...args} />
    <Yen {...args} fill="red.500" />
    <Yen {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
