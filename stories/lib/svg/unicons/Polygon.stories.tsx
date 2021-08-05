import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Polygon, PolygonPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Polygon",
  component: Polygon,
} as ComponentMeta<typeof Polygon>;

const Template: ComponentStory<typeof Polygon> = (args: PolygonPropsI) => (
  <x.div display="flex" gap="20px">
    <Polygon {...args} />
    <Polygon {...args} fill="red.500" />
    <Polygon {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
