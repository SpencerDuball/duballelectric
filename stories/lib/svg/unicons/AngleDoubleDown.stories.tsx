import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { AngleDoubleDown, AngleDoubleDownPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/AngleDoubleDown",
  component: AngleDoubleDown,
} as ComponentMeta<typeof AngleDoubleDown>;

const Template: ComponentStory<typeof AngleDoubleDown> = (
  args: AngleDoubleDownPropsI
) => (
  <x.div display="flex" gap="20px">
    <AngleDoubleDown {...args} />
    <AngleDoubleDown {...args} fill="red.500" />
    <AngleDoubleDown {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
