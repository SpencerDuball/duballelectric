import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Moonset, MoonsetPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Moonset",
  component: Moonset,
} as ComponentMeta<typeof Moonset>;

const Template: ComponentStory<typeof Moonset> = (args: MoonsetPropsI) => (
  <x.div display="flex" gap="20px">
    <Moonset {...args} />
    <Moonset {...args} fill="red.500" />
    <Moonset {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
