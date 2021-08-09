import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Tornado, TornadoPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Tornado",
  component: Tornado,
} as ComponentMeta<typeof Tornado>;

const Template: ComponentStory<typeof Tornado> = (args: TornadoPropsI) => (
  <x.div display="flex" gap="20px">
    <Tornado {...args} />
    <Tornado {...args} fill="red.500" />
    <Tornado {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
