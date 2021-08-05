import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { SmileSquintWinkAlt, SmileSquintWinkAltPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/SmileSquintWinkAlt",
  component: SmileSquintWinkAlt,
} as ComponentMeta<typeof SmileSquintWinkAlt>;

const Template: ComponentStory<typeof SmileSquintWinkAlt> = (
  args: SmileSquintWinkAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <SmileSquintWinkAlt {...args} />
    <SmileSquintWinkAlt {...args} fill="red.500" />
    <SmileSquintWinkAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
