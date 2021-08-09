import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Scenery, SceneryPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Scenery",
  component: Scenery,
} as ComponentMeta<typeof Scenery>;

const Template: ComponentStory<typeof Scenery> = (args: SceneryPropsI) => (
  <x.div display="flex" gap="20px">
    <Scenery {...args} />
    <Scenery {...args} fill="red.500" />
    <Scenery {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
